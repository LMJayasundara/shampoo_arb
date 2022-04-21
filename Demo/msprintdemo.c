#include <stdio.h>
#include <string.h>  

#include <unistd.h>
//g++ Compile
/*
extern "C" 
{
#include "Msprintsdk.h"
}
*/
int main(int argc,char** argv)
{       
	int ch=0; 
	int iRes = 1;   
	
	//int iValue = 0;
	char cSendData[3]={0};
	char cReData[3]={0}; 
	
	char buf[256];
	

	
	if(argc>=2){
		//printf("argv %s",argv);
		ch = strtol(argv[1], NULL, 10);
		
	}else{
		//printf("ch=0");
		ch=0;
	}

	while(1)
    {  
		iRes = 1;
		
		/*if(ch != '\n')
		{
			printf("\n");
			printf("*-------------------------------------------------------*\n");			
			printf("*            Print Demo                                 *\n");    
			printf("*                                                       *\n"); 
			printf("*    1:SetInit(usb/lp0)               			*\n");
			printf("*    2:SetInit(AutoUSB)                                 *\n");
			printf("*    3:SetInit(Config.ini)                              *\n");
			printf("*    4:PrintSelfcheck                 			*\n");
			printf("*    5:Print Ticket                    			*\n");
			printf("*    6:Print test.bmp                             	*\n");
			printf("*    7:PrintTransmit	                             	*\n");
			printf("*    8:GetStatus                                        *\n"); 
			printf("*    9:SetClose                                         *\n");
			printf("*    0:Exit Program                                     *\n");
			printf("*-------------------------------------------------------*\n");
			printf("     Please Select(0-9):");
		}*/
        //ch = getchar();
		
		//printf("CH \:%d\n",ch);

        switch(ch)
        {
            case 0:
				SetClose();
            	printf("Exit\n\n");
				return 1;
				break;
			case 1: 
				SetDevname(3,"",0);	
				iRes = 	SetInit(); 
				printf("SetInit Return:%d\n",iRes);
				sleep(1);
				return 0;
				break;
			case 2: 
				SetDevname(3,"",0);	
				iRes = 	SetInit(); 
				printf("SetInit Return:%d\n",iRes);
				sleep(1);
				if(iRes==0){
					ch=5;
				}
				break;
			case 3:  
				iRes = 	SetInit(); 
				printf("SetInit Return:%d\n",iRes);
				break;
			case 4:	
 				iRes = PrintSelfcheck();  
				printf("PrintSelfcheck Return:%d\n",iRes);
				sleep(2);
				return 0;
			case 5:
				if (argc < 3) {
				printf("Test print \n"); 
				SetClean(); 
			 	SetAlignment(1);
				SetLeftmargin(82);
				SetSizetext(1,1);
				SetSpacechar(0);
			 	SetAlignment(0);
				SetBold(1);
				PrintFeedDot(50);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				PrintString("TEST PRINT" ,1);
				PrintFeedDot(10);
				SetAlignment(0);
				SetLeftmargin(68);
				PrintDiskbmpfile("/home/pi/Documents/shampoo/Demo/bottom1.bmp");
				SetBold(0);
				iRes = PrintMarkpositioncut();
				printf("PrintSelfcheck Return:%d\n",iRes);
				SetClean();	
				SetClose();
				sleep(5);
		
				} else {
				printf(argv[2]);
				printf("Print Ticket \n"); 
				SetClean(); 
			 	SetAlignment(1);
				SetLeftmargin(82);
				PrintFeedDot(5);
				SetSizetext(1,1);
				SetSpacechar(0);
			 	SetAlignment(0);
				SetBold(1);
				PrintString("Refill Date  " ,1);
				SetBold(0);
				PrintString(argv[2],0);
				//SetSizetext(1,1); 
				SetBold(1);

				PrintFeedDot(8);
				PrintString("Best Before",1);
				SetBold(0);
				PrintString("  4 months from",0);
				SetAlignment(1);
				PrintString("      Refill Date",0); 

				PrintFeedDot(8);
				SetAlignment(0);
				SetBold(1);
				PrintString("Time	",1);
				SetBold(0);
				PrintString(argv[3],0); 
				SetBold(1);
				PrintString("Variant ",1);
				SetBold(0);
				PrintString(argv[4],0);
				snprintf(buf, sizeof buf, "    	Shampoo %sml", argv[6]);
				PrintString(buf,0);
				snprintf(buf, sizeof buf, "    	Rs. %s", argv[5]);
				PrintString(buf,0);
				PrintFeedDot(8);
				SetAlignment(0);
				SetLeftmargin(82);
				SetBold(1);
				PrintString("Batch No ",1);
				SetBold(0);
				PrintString(argv[10],0); 
				PrintFeedDot(5);
				SetBold(0);
				SetAlignment(1);
				Print1Dbar(3,60,0,0,10,argv[7]);
				SetAlignment(0);
				SetLeftmargin(68);
				PrintDiskbmpfile("/home/pi/Documents/shampoo/Demo/bottom1.bmp");
				iRes = PrintMarkpositioncut();
				printf("PrintSelfcheck Return:%d\n",iRes);
				SetClean();	
				SetClose();
				sleep(3);
				}
				return iRes;
			case 6:
 				iRes = PrintDiskbmpfile("test.bmp"); 
				printf("PrintDiskbmpfile Return:%d\n",iRes);
				break;
			case 7: 
				cSendData[0]=0x0A; 
				iRes =PrintTransmit(cSendData,1);
				printf("PrintTransmit Return:%d\n",iRes);

				cSendData[0]=0x10;
				cSendData[1]=0x04;
				cSendData[2]=0x01;
				iRes =GetTransmit(cSendData,3,cReData,10);
				printf("GetTransmit Return:%d;Redata:%d\n",iRes,cReData[0]);

				break; 
			case 8:				
				iRes = 	GetStatus();  
				sleep(1);
				if(iRes==1){
					iRes = SetClose();
					sleep(1);
						SetDevname(3,"",0);	
						iRes = 	SetInit(); 
						sleep(1);
					
					iRes = 	GetStatus();  
				}
				printf("%d\n",iRes);  
				return iRes;
				break;  
			case 9:
				iRes = GetStatus();
				printf("Status Return:%d\n",iRes);
				sleep(2);
				return 0;
				break;  
			case 10:
				iRes = SetClose();
				printf("SetClose Return:%d\n",iRes);
				sleep(1);
				if(iRes==0){
					ch=2;
				}
				break;  
		} 
		
		//break;
	}
	return 0; 
}  
