﻿//XJS=Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
         * @fileoverview 넥사크로  공통 Library
         * @author  copyright 2015 TOBESOFT {J}
         */
         
         
        /**
         * 공통 Callback 처리 Result 호출
         * @param {Object} jsonObject
         * @return {string}
         * @example
         *
         * @memberOf Comm
         */
        this.Comm_transactionCallback= function(oSvc,errorcode,errormsg)
        {
            new Iject.Controll.callback().transaction(oSvc,errorcode,errormsg);
        }
         
         
        this.gfn_IsNull = function(sValue)
        {
        	if(new String(sValue).valueOf() == "undefined")
        		return true;
        	if(sValue == null)
        		return true;
        	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
        		return true;
        	if( sValue.length == 0 )
        		return true;
        	 return false;
        }

        this.gfn_Trim = function(sValue)
        {
        	if (sValue == null) return "";
        	if (new String(sValue).valueOf() == "undefined") return "";
        	if (new String(sValue) == null) return "";

        	var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

        	return retVal;
        }

        this.splitDsName = function(objString,type)
        {
        	var strDsMapping;			//mapping string
        	var objArr;					//dataset name array
        	var objReturn = new Array();
        	
        	strDsMapping = objString.split(" ");
        	
        	for (var i = 0; i < strDsMapping.length ; i++ ){
        		objArr = strDsMapping[i].split("=");    // objArr = a,cd
        		if (type == 0)
        			objReturn[i] = objArr[0];
        		else
        			objReturn[i] = objArr[1];
        	}
        	
        	return objReturn;
        }

        this.gfn_codeComListLoad = function(strSvcId,strDataSet,strAllYn,strAllCode,strAllName,strCallbackFunc,strVParam)
        {
        	
        	var strTempDataSet = strDataSet+"=ds_output";
        	var strController = "code/selectCodeList.do";
        	
        	if(this.gfn_IsNull(strAllYn) || strAllYn == "")
        	{	
        		strAllYn   = "N";
        		strAllCode = "";
        		strAllName = "";
        	}
        	
        	var strParam = "";
        	strParam += " AllYn=" + strAllYn + " AllCode=" + strAllCode + " AllName=" + strAllName + " CLASS_CODE=" + strVParam;
        	
        	var oDatas =  {
        			  svcid : strSvcId,
        			  sController : strController,			 
        			  inds :[ ],
        			  outds :[
        				 strTempDataSet
        			     ],			     
        			  args  : [	
        			  	strParam
        			  ],
        			  bAsync : true,    // 비동기여부 (true : async  false: sync)
        			  nDataType : 2,   // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
        			  bCompress :false,	 //			  
        			}; 
        	
            //공통 transaction 함수 호츨   //function callback 
        	Iject.transaction(this,oDatas,function(){   
        		/*  
        		*   callback argument
        		*   @param : {string}    this.svcid       서비스 ID
        		*   @param : {object}    this.fobj        : 현재 form object
        		*   @param : {number}    this.errorcode  : 서비스 에러 코드
        		*   @param : {string}    this.errormsg   : 서비스 에러 메세지
        		*/ 
        		
        		
        		
        	    
        	});
        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();