# #!/usr/bin/env python
# import usb.core
# import usb.util
# import sys
# import requests
# import json
# import websocket
# import time

# dev = None
# ep = None

# def connect_to_scanner():
# 	# find our zebra device
# 	dev = usb.core.find(idVendor = 0x05e0, idProduct = 0x0600)
	
# 	# was it found ?
# 	if dev is None:
#             print('Device not found (meaning it is disconnected)')
#             return (None, None)
	
# 	# detach the kernel driver so we can use interface (one user per interface)
# 	reattach = False
# 	print(dev.is_kernel_driver_active(0))
# 	if dev.is_kernel_driver_active(0):
#             print("Detaching kernel driver")
#             reattach = True
#             dev.detach_kernel_driver(0)
	
# 	# set the active configuration; with no arguments, the first configuration
# 	# will be the active one
# 	dev.set_configuration()
	
# 	# get an endpoint instance
# 	cfg = dev.get_active_configuration()
# 	interface_number = cfg[(0, 0)].bInterfaceNumber
# 	alternate_setting = usb.control.get_interface(dev, interface_number)
# 	intf = usb.util.find_descriptor(
#     		cfg, bInterfaceNumber = interface_number,
#     		bAlternateSetting = alternate_setting
# 	)
	
# 	ep = usb.util.find_descriptor(
#     		intf,
#     		# match the first OUT endpoint
#     		custom_match = \
#     		lambda e: \
#         		usb.util.endpoint_direction(e.bEndpointAddress) == \
#         		usb.util.ENDPOINT_IN)
	
# 	assert ep is not None 
# 	return (dev, ep)

# (dev, ep) = connect_to_scanner()	

# while 1:
#     try:
#         # read data
#         data = dev.read(ep.bEndpointAddress, ep.wMaxPacketSize * 2, 1000)
#         str = ''.join(chr(i) if i > 0 and i < 128 else '' for i in data)
#         str = str.rstrip()[1:]
#         # barcode saved to str
#         print(str)
#     except Exception as e:
#         error_code = e.args[0]
#         # 110 is timeout code, expected
#         if error_code == 110:
#         	print ("device connected, waiting for input")
#         else:
#             print(e)
#             print("device disconnected")
#             (dev, ep) = connect_to_scanner()
#             if dev is None and ep is None:
#                 time.sleep(1)

#!/usr/bin/python
# import sys
# import usb.core
# # find USB devices
# dev = usb.core.find(find_all=True)
# # loop through devices, printing vendor and product ids in decimal and hex
# for cfg in dev:
#   sys.stdout.write('Decimal VendorID=' + str(cfg.idVendor) + ' & ProductID=' + str(cfg.idProduct) + '\n')
#   sys.stdout.write('Hexadecimal VendorID=' + hex(cfg.idVendor) + ' & ProductID=' + hex(cfg.idProduct) + '\n\n')
#!/usr/bin/python
import sys
import requests
import json

api_key = "" #https://upcdatabase.org/

def barcode_reader():
    """Barcode code obtained from 'brechmos' 
    https://www.raspberrypi.org/forums/viewtopic.php?f=45&t=55100"""
    hid = {4: 'a', 5: 'b', 6: 'c', 7: 'd', 8: 'e', 9: 'f', 10: 'g', 11: 'h', 12: 'i', 13: 'j', 14: 'k', 15: 'l', 16: 'm',
           17: 'n', 18: 'o', 19: 'p', 20: 'q', 21: 'r', 22: 's', 23: 't', 24: 'u', 25: 'v', 26: 'w', 27: 'x', 28: 'y',
           29: 'z', 30: '1', 31: '2', 32: '3', 33: '4', 34: '5', 35: '6', 36: '7', 37: '8', 38: '9', 39: '0', 44: ' ',
           45: '-', 46: '=', 47: '[', 48: ']', 49: '\\', 51: ';', 52: '\'', 53: '~', 54: ',', 55: '.', 56: '/'}

    hid2 = {4: 'A', 5: 'B', 6: 'C', 7: 'D', 8: 'E', 9: 'F', 10: 'G', 11: 'H', 12: 'I', 13: 'J', 14: 'K', 15: 'L', 16: 'M',
            17: 'N', 18: 'O', 19: 'P', 20: 'Q', 21: 'R', 22: 'S', 23: 'T', 24: 'U', 25: 'V', 26: 'W', 27: 'X', 28: 'Y',
            29: 'Z', 30: '!', 31: '@', 32: '#', 33: '$', 34: '%', 35: '^', 36: '&', 37: '*', 38: '(', 39: ')', 44: ' ',
            45: '_', 46: '+', 47: '{', 48: '}', 49: '|', 51: ':', 52: '"', 53: '~', 54: '<', 55: '>', 56: '?'}

    fp = open('/dev/hidraw1', 'rb')

    ss = ""
    shift = False

    done = False

    while not done:

        ## Get the character from the HID
        buffer = fp.read(8)
        for c in buffer:
            if ord(c) > 0:

                ##  40 is carriage return which signifies
                ##  we are done looking for characters
                if int(ord(c)) == 40:
                    done = True
                    break

                ##  If we are shifted then we have to
                ##  use the hid2 characters.
                if shift:

                    ## If it is a '2' then it is the shift key
                    if int(ord(c)) == 2:
                        shift = True

                    ## if not a 2 then lookup the mapping
                    else:
                        ss += hid2[int(ord(c))]
                        shift = False

                ##  If we are not shifted then use
                ##  the hid characters

                else:

                    ## If it is a '2' then it is the shift key
                    if int(ord(c)) == 2:
                        shift = True

                    ## if not a 2 then lookup the mapping
                    else:
                        ss += hid[int(ord(c))]
    return ss

def UPC_lookup(api_key,upc):
    print(upc)

if __name__ == '__main__':
    try:
        while True:
            UPC_lookup(api_key,barcode_reader())
    except KeyboardInterrupt:
        pass