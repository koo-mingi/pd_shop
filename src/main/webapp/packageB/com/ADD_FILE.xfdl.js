(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("ADD_FILE");
                this.set_classname("LAWSUIT_ADM_NO");
                this.set_titletext("서증 첨부파일");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,619,377);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_addFile", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDel\" type=\"STRING\" size=\"256\"/><Column id=\"addFileRegDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileChanDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDel\" type=\"STRING\" size=\"256\"/><Column id=\"addFileRegDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileChanDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_upFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRelSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRelSeq00", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_00", "absolute", "14", "267", "580", "66", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "14", "66", "580", "160", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "580", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 굴림");
            obj.set_text("  첨부파일");
            obj.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Search", "absolute", "22", "73", "564", "146", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_file");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 자료가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"89\"/><Column size=\"246\"/><Column size=\"80\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"파일이름\"/><Cell col=\"3\" text=\"크기\"/><Cell col=\"4\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:addFileRelSeq\"/><Cell col=\"2\" text=\"bind:addFileSerFileName\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:addFileSize\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:addFileRegDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "275", "234", "65", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_text("파일검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "341", "234", "65", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("등록취소");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "407", "234", "65", "23", null, null, this);
            obj.set_taborder("9");
            obj.set_text("파일삭제");
            obj.set_enable("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "540", "234", "55", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_download", "absolute", "474", "234", "65", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("파일저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_UpFile", "absolute", "21", "274", "566", "53", null, null, this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_upFile");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"189\"/><Column size=\"73\"/><Column size=\"303\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일이름\"/><Cell col=\"1\" text=\"사이즈\"/><Cell col=\"2\" text=\"pc파일경로\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/><Cell col=\"1\" text=\"bind:FILE_SIZE\"/><Cell col=\"2\" text=\"bind:FILE_PATH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload", "absolute", "540", "334", "55", "23", null, null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "101.99%", "36", null, "24", "-19.21%", null, this);
            obj.set_taborder("14");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "101.99%", "10", null, "22", "-19.37%", null, this);
            obj.set_taborder("15");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 619, 377, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_ADM_NO");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("서증 첨부파일");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("ADD_FILE.xfdl", "Lib::common.xjs");
        this.registerScript("ADD_FILE.xfdl", function() {
        //include "Lib::common.xjs";

        var checkVal="";
        var closeCheck=false;
        //this.newAddFileRelSeq = "";
        this.gFileSize = 0;
        this.FILE_PATH = "FileUpDown\\";

        this.fnCallback = function(strSvcId,nErrCode,strErrMessage){
        	switch(strSvcId){
        		case "getPreAddFile":
        			//trace("준비서면 파일 >> " + this.ds_file.saveXML());
        			if(closeCheck)
        			{
        				var rtnObj = {"ds_file":this.ds_file.saveXML(), "rowCnt":this.ds_file.getRowCount()}
        				this.close(JSON.stringify(rtnObj));
        			}
        			break;
        		case "getEdocAddFile":
        			//trace("파일 >> " + this.ds_file.saveXML());
        			if(closeCheck)
        			{
        				var rtnObj = {"ds_file":this.ds_file.saveXML(), "rowCnt":this.ds_file.getRowCount()}
        				this.close(JSON.stringify(rtnObj));
        			}
        			break;
        		case "insertFile" : 
        			this.fnAddfile();
        			break;
        		case "getAddFile":
        			var addFileRelSeq = this.dsRelSeq.getColumn(0,'addFileRelSeq');
        			this.ds_addFile.setColumn(0,"addFileRelSeq",addFileRelSeq);
        			
        			if (checkVal=='008')	this.insertFilePre();	//준비서면 첨부파일 내역			
        			else 					this.insertFileEdoc();	//서증 첨부파일 내역
        			
        			break;
        		case "insertFilePre" : 
        			this.ds_upFile.clearData();
        			this.listViewPre();
        			break;
        		case "insertFileEdoc" : 
        			//서증 첨부파일 내역 조회
        			this.ds_upFile.clearData();
        			this.listViewEdoc();
        			break;
        		case "deleteFile" : 
        			if (checkVal=='008') 
        			{
        				//준비서면 첨부파일 내역
        				this.ds_file.clearData();
        				this.listViewPre();
        			} 
        			else 
        			{
        				//서증 첨부파일 내역
        				this.ds_file.clearData();
        				this.listViewEdoc();
        			}
        			break;
        		case "getFileSize" :
        			var sFileSize = Math.round(this.gFileSize/1024) + "KB";
        			this.ds_upFile.setColumn(this.ds_upFile.rowposition, "FILE_SIZE", sFileSize);
        			break;
        	}
        }

        this.ADD_FILE_onload = function(obj,e)
        {	
        	//alert("팝업창 로드 .> " + this.parent.BookNo);
        	
        	// JKIM_2020.01.13 : Type error (substr) correction
        	//var parentBookNo = this.parent.BookNo;
        	var parentBookNo = new String(this.parent.BookNo);  
        	var chnScrn = parentBookNo.substr(0, 3);
        	
        	if(chnScrn == "008")	// 준비서면
        	{	
        		checkVal = chnScrn;
        		var memAddFileSep = parentBookNo.substr(3,4);
        		var memAddFileNo = parentBookNo.substr(7,10);
        		var memAddFileSimNo = parentBookNo.substr(17,3);
        		var preIwrNo = parentBookNo.substr(20,4);
        		var addFileAdmName1 = memAddFileSep + "_" + memAddFileNo;
        		
        		// 타이틀변경(준비서면)
        		this.title_change(memAddFileSep);
        		
        		var nRow = this.ds_addFile.addRow();
        		this.ds_addFile.setColumn(nRow, "lawsuitAdmNo",memAddFileNo);
        		this.ds_addFile.setColumn(nRow, "instAdmCode",memAddFileSimNo);
        		this.ds_addFile.setColumn(nRow, "preIwrNo",preIwrNo);
        		this.ds_addFile.setColumn(nRow, "addFileAdmName",addFileAdmName1);
        		
        		this.listViewPre();
        		
        	} 
        	else if (chnScrn == "009")	// 서증관리
        	{		
        		checkVal = chnScrn;
        		var memAddFileSep = parentBookNo.substr(3,2);
        		var memAddFileNo = parentBookNo.substr(5,10);
        		var edocAdmSeq = parentBookNo.substr(15,4);
        		var addFileAdmName1 = memAddFileSep + "_" + memAddFileNo;
        		
        // 		alert("memAddFileSep >> " + memAddFileSep);
        // 		alert("memAddFileNo >> " + memAddFileNo);
        // 		alert("edocAdmSeq >> " + edocAdmSeq);
        // 		alert("addFileAdmName1 >> " + addFileAdmName1);
        		
        		// 타이틀변경(서증)
        		this.title_change(memAddFileSep);
        		
        		var nRow = this.ds_addFile.addRow();
        		this.ds_addFile.setColumn(nRow, "lawsuitAdmNo",memAddFileNo);
        		this.ds_addFile.setColumn(nRow, "addFileAdmName",addFileAdmName1);
        		this.ds_addFile.setColumn(nRow, "edocAdmSeq",edocAdmSeq);
        		
        		//
        		this.listViewEdoc();
        	}
        }

        this.title_change = function(value){

        // 	if(value == "준비서면") {
        // 
        // 		this.img_titlebg.set_text("  준비서면 첨부파일");
        // 	
        // 	} else if(value == "서증") {
        // 	
        // 		this.img_titlebg.set_text("  서증 첨부파일");
        // 	}

        	// JKIM_2020.01.14 : code simplification
        	this.img_titlebg.set_text("  " + value + " 첨부파일"); 
        }

        this.listViewPre = function()
        {
        	//trace("준비서면 select input check :: "+this.ds_addFile.saveXML());
        	this.gfn_transaction(this,
        						"getPreAddFile",
        						"common/getPreAddFile.do",
        						"ds_input=ds_addFile",
        						"ds_file=ds_output",
        						"",
        						"fnCallback"
        						);
        };

        //서증 첨부파일 TAB_EDOC_ADD_FILE select
        this.listViewEdoc = function () 
        {	
        	var lawsuitAdmNo = this.ds_addFile.getColumn(this.ds_addFile.rowcount-1, "lawsuitAdmNo");
        	var edocAdmSeq = this.ds_addFile.getColumn(this.ds_addFile.rowcount-1, "edocAdmSeq");
        	var strParam ="";
        	var newAddFileRelSeq = this.dsRelSeq.getColumn(0,'addFileRelSeq');
        	
        	strParam += "addFileRelSeq=" + "\"" + newAddFileRelSeq + "\"";
        	strParam += " lawsuitAdmNo=" + "\"" + lawsuitAdmNo + "\"";
        	strParam += " edocAdmSeq=" + "\"" + edocAdmSeq + "\"";
        	
        	this.transaction("getEdocAddFile"
        					,"svcurl::common/getEdocAddFile.do"
        					,""
        					,"ds_file=ds_output"
        					,strParam
        					,"fnCallback");
        }
        /*
        this.listViewEdoc = function() {
        	
        	var lawsrcrlt = this.ds_addFile.getColumn(this.ds_addFile.rowposition, "lawsuitAdmNo");
        	var edocAdmSeq = this.ds_addFile.getColumn(this.ds_addFile.rowposition, "edocAdmSeq");
        	
        	var strParam ="";
        	
        	strParam += "lawsuit_adm_no=" + "\"" + lawsrcrlt + "\"";
        	strParam += " edoc_adm_seq=" + "\"" + edocAdmSeq + "\"";
        	//alert("strParam >> " + strParam);
        	this.transaction("getEdocAddFile"
        				,"svcurl::common/getEdocAddFile.do"
        				,""
        				,"ds_file=ds_output"
        				,strParam
        				,"fnCallback"
        				);

        }
        */

        this.btn_add_onclick = function(obj,e)
        {
        	
        	this.FileUpload00.appendItem(); 
        	this.FileUpload00.filefindbuttons[this.FileUpload00.getItemCount(false)-1].click(); 

        }

        this.btn_upload_onclick = function(obj,e)
        {	
        	//20.01.23 File Renaming param추가
        	var addFileAdmName = this.ds_addFile.getColumn(this.ds_addFile.rowposition, "addFileAdmName");
        	var addFilePcFile = this.ds_addFile.getColumn(this.ds_addFile.rowposition, "addFilePcFile");
        	var addFilePcFileExt = this.ds_addFile.getColumn(this.ds_addFile.rowposition, "addFilePcFileExt");
        	
        	//server FileName(SQL기준)
        	var sAddFileSerFileName = addFileAdmName + "_" + addFilePcFile +"."+ addFilePcFileExt;	
        	var rowCnt = this.ds_upFile.getRowCount();
        	
        	trace("Upload click : "+sAddFileSerFileName);
        	
        	if (rowCnt == 1) 
        	{

        		this.setWaitCursor(true);	  	
        			
        		var sFileUrl  = "svcurl::/jsp/fileUpload.jsp?PATH=" + this.FILE_PATH
        													+ "&addFileSerFileName="+sAddFileSerFileName; 
        		//trace("+++ upload File : url=" + sFileUrl);
        		//trace("+++ upload File : server File Name=" + sAddFileSerFileName);

        		this.FileUpload00.upload(sFileUrl);	
        		
        	} 
        	else if(rowCnt > 1)
        	{
        		alert("한번에 한 파일만 등록 가능합니다.");
        	} 
        	else if(rowCnt == 0)
        	{
        		alert("파일을 등록하세요.");
        	}

        }

        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	var sFullName, sFileName, sFilePath, nFileSize, sFileExt, sFileDir, sFileAdmName;

        	
        	sFilePath = obj.value; //e.newvalue;

        	var dirExpt = sFilePath.lastIndexOf("\\")+1;
        	sFullName = sFilePath.substr(dirExpt);
        	sFileDir = sFilePath.substr(0, dirExpt); 
        	
        	var fileExpt = sFullName.lastIndexOf(".")+1;
        	sFileExt = sFullName.substr(fileExpt);
        	sFileName = sFullName.replace("."+sFileExt, "");

        	if(sFilePath == null || sFilePath == "" ){
        		
        		return;
        	}
        	
        	sFileAdmName = this.ds_addFile.getColumn(this.ds_addFile.rowposition, "addFileAdmName");
        	
        	// JKIM_2020.02.13 : For Quick View
        	if(this.gfn_IsNull(sFileAdmName)) {
        	
        		var oDate = new Date();
        		var sToday = oDate.getFullYear().toString();
        		sToday += (oDate.getMonth()+1).toString().padLeft(2, "0");
        		sToday += oDate.getDate().toString().padLeft(2, "0");
        		sToday += oDate.getMinutes().toString().padLeft(2, "0");
        		
        		sFileAdmName = "첨부_" + sToday;
        		var nRow = this.ds_addFile.addRow();
        		this.ds_addFile.setColumn(nRow, "addFileAdmName", sFileAdmName);
        	}
        	
        	var idx = this.FileUpload00.index;
        	if(idx >= 2){ // single file upload
        		this.FileUpload00.deleteItem(1);
        	}

        	this.ds_addFile.setColumn(this.ds_addFile.rowcount-1, "addFilePcFile", sFileName);
        	this.ds_addFile.setColumn(this.ds_addFile.rowcount-1, "addFilePcFileExt", sFileExt);
        	
        	this.ds_upFile.clearData();
        	var nRow = this.ds_upFile.addRow();
        	this.ds_upFile.setColumn(nRow, "FILE_NAME", sFullName);
        	this.ds_upFile.setColumn(nRow, "FILE_PATH", sFileDir);	
        	
        	this.gfn_transaction(this,
        						"getFileSize",
        						"common/getFileSize.do",
        						"",
        						"",
        						"sFileName="+sFilePath,
        						"fnCallback"
        						);
        	
        	trace("+++ selected File : pcName="+sFileName+", AdmName="+sFileAdmName+", ext="+sFileExt);	
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {
        		
        	if( e.errorcode == 200 || e.datasets != null) {	// success
        	
        		this.setWaitCursor(false);	
        		
        		var sFileSize = e.datasets[0].getColumn(0, "fileSize");
        		this.ds_addFile.setColumn(this.ds_addFile.rowcount-1, "addFileSize", sFileSize);	
        		this.ds_addFile.setColumn(this.ds_addFile.rowcount-1, "addFileSerPath", this.FILE_PATH); 	
        		
        		this.fn_uploadAfter();
        	
        	} else {
        	
        		this.setWaitCursor(false);
        		
        	}	
        }

        this.fn_uploadAfter = function() 
        {	
        	this.alert("파일 업로드가 완료되었습니다!");
        	//this.ds_upFile.clearData();
        	//insert
        	this.insertFile();
        	
        }

        
        this.FileUpload00_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	this.alert("파일 업로드가 실패하였습니다! 다시 시도하십시오.");
        }

        this.btn_download_onclick = function(obj,e)
        {
        	var sFileName = this.ds_file.getColumn(this.ds_file.rowposition, "addFileSerFileName");	
        	var sFilePath = this.ds_file.getColumn(this.ds_file.rowposition, "addFileSerPath");	
        	var sFileUrl = "svcurl::jsp/fileDownload.jsp?file=";  
        	
        	trace(">>>>> "+sFileUrl+sFilePath+sFileName);
        	
        	this.FileDownload00.set_downloadurl(sFileUrl+sFilePath+sFileName);
        	this.FileDownload00.set_downloadfilename(sFileName);
        	
        	var bSucc = this.FileDownload00.download();
        	trace("bSucc :: "+bSucc);
        }

        this.FileDownload00_onsuccess = function(obj,e)
        {
        	this.alert("파일 다운로드가 완료되었습니다!");
        }

        this.FileDownload00_onerror = function(obj,e)
        {
        	this.alert("파일 다운로드 중 에러가 발생하였습니다!");	
        }

        this.btn_close_onclick = function(obj,e)
        {
        	//this.close();
        	
        	closeCheck = true;
        	
        	if (checkVal=='008')		this.listViewPre();
        	else if (checkVal=='009')	this.listViewEdoc();
        }

        //첨부파일 TAB_ADD_FILE insert
        this.insertFile = function ()
        {
        	this.transaction("insertFile"
        					,"svcurl::common/insertFile.do"
        					,"ds_input=ds_addFile:U"
        					,""
        					,"sPath=\""+this.FILE_PATH+"\""
        					,"fnCallback");
        }

        this.fnAddfile = function ()
        {
        	//trace("ds_upFile check :: "+this.ds_upFile.saveXML());
        	this.gfn_transaction(this,
        						"getAddFile",
        						"common/getAddFile.do",
        						"ds_input=ds_addFile",
        						"dsRelSeq=ds_output",
        						"",
        						"fnCallback"
        						);
        };

        //준비서면 첨부파일 insert
        this.insertFilePre = function () 
        {		
        	//var cRow = this.ds_addFile.rowposition;
        	var addFileRelSeq = this.dsRelSeq.getColumn(0, "addFileRelSeq");
        	
        	this.ds_addFile.setColumn(0,"addFileRelSeq",addFileRelSeq);

        	var strSvcID = "insertFilePre";
        	var strURL	 ="common/insertFilePre.do";	
        	var strInDatasets ="ds_input=ds_addFile";
        	var strOutDatasets ="";		
        	var strParam="";
        	var strCallbackFunc="fnCallback";
        	
        	this.gfn_transaction(this,
        						strSvcID,
        						strURL,
        						strInDatasets,
        						strOutDatasets,
        						strParam,
        						strCallbackFunc
        						);
        }

        //서증 첨부파일 TAB_EDOC_ADD_FILE insert
        this.insertFileEdoc = function () 
        {	
        	var strParam ="";
        	var newAddFileRelSeq = this.dsRelSeq.getColumn(0,'addFileRelSeq');
        	strParam += "newAddFileRelSeq=" + "\"" + newAddFileRelSeq + "\"";
        	strParam += " lawsuitAdmNo=" + "\"" + this.ds_addFile.getColumn(this.ds_addFile.rowcount-1, "lawsuitAdmNo") + "\"";
        	strParam += " edocAdmSeq=" + "\"" + this.ds_addFile.getColumn(this.ds_addFile.rowcount-1, "edocAdmSeq") + "\"";
        	
        	this.transaction("insertFileEdoc"
        					,"svcurl::common/insertFileEdoc.do"
        					,"ds_input=ds_addFile:U"
        					,""
        					,strParam
        					,"fnCallback");
        }

        
        //등록취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.ds_upFile.clearData();
        	this.btn_add.enable = true;
        }

        //파일삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	
        	var file = this.ds_file.getColumn(this.ds_file.rowposition,"addFileRelSeq");
        	var lawsrcrlt = this.ds_file.getColumn(this.ds_file.rowposition,"lawsuitAdmNo");
        	var instcdrlt = this.ds_file.getColumn(this.ds_file.rowposition,"instAdmCode");
        	var preIwrNo = this.ds_file.getColumn(this.ds_file.rowposition,"preIwrNo");
        	var edocAdmSeq = this.ds_file.getColumn(this.ds_file.rowposition,"edocAdmSeq");
        	 
        	if (this.gfn_IsNull(file) == false) 
        	{
        		var strParam = "", strSvcId, strSvcUrl;
        		
        		strParam += "add_file_rel_seq=\"" + file + "\"";
        		strParam += " lawsuit_adm_no=\"" + lawsrcrlt + "\""	;
        		strParam += " inst_adm_Code=\"" + instcdrlt + "\"";
        		strParam += " pre_iwr_no=\"" + preIwrNo + "\"";
        		strParam += " edoc_adm_seq=\"" + edocAdmSeq + "\"";
        		strParam += " checkVal=\"" + checkVal + "\"";  // JKIM_2020.02.14 : add checkVal (null check X)
        		
        		this.transaction("deleteFile"
        						,"svcurl::common/deleteFile.do"
        						,""
        						,""
        						,strParam
        						,"fnCallback");
        						
        	} else {
        		alert("삭제할 파일을 선택하세요");
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.ADD_FILE_onload, this);
            this.grd_Search.addEventHandler("onheadclick", this.grd_Search_onheadclick, this);
            this.grd_Search.addEventHandler("oncelldblclick", this.grd_Search_oncelldblclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_download.addEventHandler("onclick", this.btn_download_onclick, this);
            this.btn_upload.addEventHandler("onclick", this.btn_upload_onclick, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.FileDownload00.addEventHandler("onsuccess", this.FileDownload00_onsuccess, this);
            this.FileDownload00.addEventHandler("onerror", this.FileDownload00_onerror, this);

        };

        this.loadIncludeScript("ADD_FILE.xfdl");

       
    };
}
)();
