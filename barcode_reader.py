import io
from os import truncate
import socketio
import threading
import usb.core
import usb.util
import sys


#Initializing variables for Barcode
dev = None
ep = None

barcode_string = ""
sio = socketio.Client()


@sio.event
def connect():
    run()
    print('connection established')

@sio.on('TO_BARCODE')
def to_barcode(data):
    global barcode_string
    print(data)
    readBarcode()


# function to connect to the barcode and get endpoints
def connect_to_scanner():
	# find our zebra device
	dev = usb.core.find(idVendor = 0x05e0, idProduct = 0x0600)
	# was it found ?
	if dev is None:
		print('Device not found (meaning it is disconnected)')
		return (None, None)
	
	# detach the kernel driver so we can use interface (one user per interface)
	reattach = False
	print(dev.is_kernel_driver_active(0))
	if dev.is_kernel_driver_active(0):
		print("Detaching kernel driver")
		reattach = True
		dev.detach_kernel_driver(0)
	
	# set the active configuration; with no arguments, the first configuration
	# will be the active one
	dev.set_configuration()
	
	# get an endpoint instance
	cfg = dev.get_active_configuration()
	interface_number = cfg[(0, 0)].bInterfaceNumber
	alternate_setting = usb.control.get_interface(dev, interface_number)
	intf = usb.util.find_descriptor(
			cfg, bInterfaceNumber = interface_number,
			bAlternateSetting = alternate_setting
	)
	
	ep = usb.util.find_descriptor(
			intf,
			# match the first OUT endpoint
			custom_match = \
			lambda e: \
				usb.util.endpoint_direction(e.bEndpointAddress) == \
				usb.util.ENDPOINT_IN)
	
	# assert ep is not None 
	if ep is None:
		print("returned end_point is none")

	return (dev, ep)


@sio.event
def disconnect():
    print('disconnected from server')

def readBarcode():
    global barcode_string
    print("received")
    detectBarcode()
    if(barcode_string != ""):
        print("sending code")
        sio.emit('FROM_BARCODE',data=barcode_string, callback=done)
        barcode_string = ""

def detectBarcode():
    global barcode_string
    global dev, ep
    is_detect = False
    while not is_detect:
        try:
            # DO_PREDICTION = True

            barcode_detection = "NotDetect"

            # (dev, ep) = connect_to_scanner()
            if dev is None and ep is None:
                (dev, ep) = connect_to_scanner()
            # read data
            data = dev.read(ep.bEndpointAddress, ep.wMaxPacketSize, 30)	# timeout is 30ms
            barcode_str = ''.join(chr(i) if i > 0 and i < 128 else '' for i in data)
            barcode_str = barcode_str.rstrip()[1:]

            # barcode saved to barcode_str
            ## NEED T0 TEST MORE
            if len(barcode_str) > 0:
                is_detect = True
            else:
                pass

        except Exception as e:
            error_code = e.args[0]
            # 110 is timeout code, expected
            if error_code == 110:
                pass
                # print("device connected, waiting for input")

            else:
                print(e)
                print("device disconnected")
                (dev, ep) = connect_to_scanner()

def run():
    print("running")
    threading.Timer(1.0, run).start()

def done():
    sio.disconnect()

def main():
    sio.connect('http://localhost:3001')
    sio.wait()

if __name__ == '__main__':
    while True:
        try:
            # main()
            readBarcode()
        except:
            print("connection error !")