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
                this.set_name("aprv_comment_cont");
                this.set_titletext("결재 상신");
                this._setFormPosition(0,0,600,302);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_aprvInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfoname1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfodeptname1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfocont1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfoname2\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfodeptname2\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfocont2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_comment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaDeptName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position_pig", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmSeq\" type=\"INT\" size=\"256\"/><Column id=\"aprvlineAdmUpSeq\" type=\"INT\" size=\"256\"/><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpAprvcode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvIdName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptIdName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvUpId\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"insaPosGbnCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_firstAprvLine", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeSabun\" type=\"STRING\" size=\"256\"/><Column id=\"codeDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"codeUpId\" type=\"STRING\" size=\"256\"/><Column id=\"codeNameSabun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_01", "absolute", "14", "98", "578", "137", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "128", "562", "100", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "104", "562", "25", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "572", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  결재 상신");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "529", "250", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "23", "70", "146", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("결재라인");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "128", "115", "100", null, null, this);
            obj.set_taborder("18");
            obj.set_text("참고의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "104", "115", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_save", "absolute", "470", "250", "55", "23", null, null, this);
            obj.set_taborder("25");
            obj.set_text("상신");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_cont", "absolute", "140", "132", null, "92", "4%", null, this);
            obj.set_taborder("27");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "358", "70", "65", "26", null, null, this);
            obj.set_taborder("30");
            obj.set_text("결재라인");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "416", "71", "170", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_innerdataset("@ds_firstAprvLine");
            obj.set_codecolumn("codeSabun");
            obj.set_datacolumn("codeNameSabun");
            obj.set_index("-1");

            obj = new Edit("edt_title", "absolute", "140", "107", "436", "19", null, null, this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "54", "105", "37", "23", null, null, this);
            obj.set_taborder("34");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "41", "168", "37", "23", null, null, this);
            obj.set_taborder("35");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 572, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  결재 상신");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 302, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("결재 상신");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","txt_cont","value","ds_comment","aprvprgrInfoWritCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_title","value","ds_comment","aprvprgrInfoWritTit");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("APRV_PROG_COMMENT.xfdl", "Lib::common.xjs");
        this.registerScript("APRV_PROG_COMMENT.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출
        // 부모 데이터셋 불러오는 방법
        //alert(this.opener.ds_alessue.getColumn(0,0));

        var sabun = "";
        var infoStepCode = "";
        var bookNo = "";
        var comboIndex = "";
        var aprvprgrInfoSeq = "";

        /**********************************************************
        1. OnLoad
          1.1. 제목변경
          1.2. 결재라인 불러오기.
            1.2.1. 생성된 결재 라인이 없을 경우 insert.
            1.2.2. 생성된 결재 라인이 있을 경우 update 및 최초 1차 결재라인 로딩.
          1.2. 

        
        **********************************************************/

        

        // 1. onLoad
        this.APRV_PROG_COMMENT_onload = function(obj,e)
        {	

        	infoStepCode = this.parent.stepCode;
        	bookNo = this.parent.bookNo;
        	aprvprgrInfoSeq = this.parent.aprvprgrInfoSeq;

        // 	alert("modal bookNo : " + bookNo);
        // 	alert("modal infoStepCode : " + infoStepCode);
        // 	alert("modal aprvprgrInfoSeq : " + aprvprgrInfoSeq);
        	
        	sabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	
        //	trace("APRV_PROG_COMMENT_onload :: " + this.opener.ds_position.saveXML());
        	
        	var value = this.opener.ds_position.getColumn(0,"aprvprgrInfoSeq");	
        // 	trace("광훈 : " + this.opener.ds_position.getColumn(0,"aprvprgrInfoSeq"));
        // 	trace("광훈 : " + value);
        // 	alert(value);
        // 	alert(this.opener.ds_position.saveXML());
        	if (this.gfn_IsNull(value)) {
        		value = this.parent.aprvprgrInfoSeq;
        	}
        	
        	
        	// 1.1 제목변경
        	this.title_change(infoStepCode);
        	
        	// 1.2. 결재라인 불러오기.
        	this.get_approvalPigList(infoStepCode);
        	
        	// 1.2.1. 생성된 결재 라인이 없을 경우 insert.
        	if(value == null) {
        //		alert("if");
        		this.set_comment();
        	} else {
        	//1.2.2. 생성된 결재 라인이 있을 경우 update 및 최초 1차 결재라인 로딩.
        //		alert("else");
        		this.get_approvalLineList(bookNo);
        	}
        	
        	this.aprv_lock();
        	
        	if(this.Combo00.visible == true) {
        		for(var i = 0 ; i < this.ds_firstAprvLine.rowcount ; i++) {
        			if(this.opener.ds_position.getColumn(0, "aprvInfoSabun") == this.ds_firstAprvLine.getColumn(i, "codeSabun")) {
        				comboIndex = i;
        			} else if(this.opener.ds_position.getColumn(0, "aprvInfoSabun") == ""){
        				comboIndex = -1;
        			}
        		}
        		//this.Combo00.index = comboIndex;
        		this.Combo00.set_index(comboIndex);
        		this.Combo00_onitemchanged();
        		
        	}
        	
        	
        // 	var strSvcId = "getAprvWriter";  
        // 	var strURL = "svcurl::approvalProg/getAprvWriter.do";
        // 	var strInDatasets = "";
        // 	var strOutDatasets = "ds_insa=ds_output";
        // 	var strArgument = "";
        // 	var strCallbackFunc = "fnCallback";
        // 	
        // 	Sabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        // 	
        // 	strArgument += "insaSabun=" + '\"' + Sabun + '\"';
        // 	
        //  	this.transaction(strSvcId, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc);
        		
        }

        // 1.2. 결재라인 불러오기.
        this.get_approvalPigList = function(infoStepCode) {
        	var strSvcid = "outList";
        	var strUrl = "svcurl::approval/approvalPigList.do";
        	var strInputDs = ""; 
        	var strOutputDs = "ds_position_pig=ds_output";
        	var strParam = "";
        	var strFnCallback = "fncallback1";
        	
        	
        	strParam += "out_no=" + "\"" + infoStepCode + "\""; 
        	strParam += " out_no1=" + "\"E01\""; 	//E01 - 직책코드
        	strParam += " out_no2=" + "\"1\""; 		//1- 결재라인이 1인 경우
        	
        	this.transaction(strSvcid
        				, strUrl
        				, strInputDs
        				, strOutputDs
        				, strParam
        				, strFnCallback);
        }

        // 1.2.1. 생성된 결재 라인이 없을 경우 insert.
        this.set_comment = function(){
        this.ds_comment.addRow();
        	
        	this.ds_comment.setColumn(0, "aprvprgrInfoStepCode", infoStepCode);
        	this.ds_comment.setColumn(0, "aprvprgrInfoBookNo", bookNo);	
        	
        	this.ds_comment.setColumn(0, "aprvprgrInfoWritSabun", this.ds_insa.getColumn(0, "insaSabun"));
        	this.ds_comment.setColumn(0, "aprvprgrInfoWrit", this.ds_insa.getColumn(0, "insaName"));
        	this.ds_comment.setColumn(0, "aprvprgrInfoWritDeptCode", this.ds_insa.getColumn(0, "insaDeptCode"));
        	this.ds_comment.setColumn(0, "aprvprgrInfoWritDeptName", this.ds_insa.getColumn(0, "insaDeptName"));
        	
        	this.ds_comment.setColumn(0, "aprvInfoCondCode", "N");
        }

        //1.2.2. 생성된 결재 라인이 있을 경우 update 및 최초 1차 결재라인 로딩.
        this.get_approvalLineList = function() {
        	var strSvcID2 = "approvalVita";
        	var strURL2 = "svcurl::approval/approvalLineList.do";	
        	var strInDatasets2 = "";
        	var strOutDatasets2 = "ds_comment=ds_output";
        	var strArgument2 = "";
        	var strCallbackFunc2 = "fnCallback3";

        	strArgument2 += "APRVPRGR_INFO_BOOK_NO=" + "\"" + bookNo + "\""; 
        	strArgument2 += " APRVPRGR_INFO_STEP_CODE=" + "\"" + infoStepCode + "\"";
        		
        	this.transaction(strSvcID2,
        				strURL2,
        				strInDatasets2,
        				strOutDatasets2,
        				strArgument2,
        				strCallbackFunc2);
        }

        this.aprv_lock = function() {
        	if(this.opener.ds_position.getColumn(0, "aprvInfoCondCode") == "Y" || this.opener.ds_position.getColumn(0, "aprvInfoCondCode") == "Z") {
        		this.edt_title.enable = false;
        		this.txt_cont.enable = false;
        		this.Button_save = false;
        	}
        }

        
        // fnCallback1 함수
        this.fncallback1 = function(strId,errcode,errmsg) {
        	if(strId == "outList"){
        		if(errcode < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else {
        			//작성자정보 불러오기(ds_insa 로딩)
        			//Sabun = substr(gb_Param, "4", "10");
        			this.get_getAprvWriter(sabun);
        		}
        	}
        	
        }

        // fnCallback2 함수
        this.fnCallback2 = function(strId,errcode,errmsg){
        	if(strId == "getAprvWriter"){
        		if(errcode < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else {
        			//라디오버튼 setting
        			for(var i=0; i <= this.ds_position_pig.rowcount; i++){
        				if(this.ds_position_pig.getColumn(i,"aprvlineAdmSeq") == "1"){
        				
        					var aRow = this.ds_firstAprvLine.addRow(); 
        					this.ds_firstAprvLine.setColumn(aRow, "codeName", this.ds_position_pig.getColumn(i,"insaName"));
        					this.ds_firstAprvLine.setColumn(aRow, "codeSabun", this.ds_position_pig.getColumn(i,"aprvlineAdmAprvId"));			
        					this.ds_firstAprvLine.setColumn(aRow, "codeDeptCode", this.ds_position_pig.getColumn(i,"aprvlineAdmAprvDeptId"));
        					this.ds_firstAprvLine.setColumn(aRow, "codeUpId", this.ds_position_pig.getColumn(i,"aprvlineAdmUpId"));
        					this.ds_firstAprvLine.setColumn(aRow, "codeNameSabun"," " + this.ds_position_pig.getColumn(i,"insaName")+" ("+this.ds_position_pig.getColumn(i,"aprvlineAdmAprvId")+")");
        					
        					if(this.ds_firstAprvLine.getColumn(0, "codeDeptCode") == "001"){
        						this.ds_firstAprvLine.setColumn(0, "codeDeptName", "총무부");
        					}else if(this.ds_firstAprvLine.getColumn(0, "codeDeptCode") == "002"){
        						this.ds_firstAprvLine.setColumn(0, "codeDeptName", "SI사업부");
        					}else{
        						this.ds_firstAprvLine.setColumn(0, "codeDeptName", "관리부");
        					}
        				}
        			}
        			//this.Combo00.index = "-1";
        			this.Combo00.set_index(-1);
        			
        		}
        	}
        	
        }

        // fnCallback3 함수
        this.fnCallback3 = function(strSvcId,nErrCode,strErrMessage) {
        //	trace("approvalVita >> " + this.ds_comment.saveXML());

        
        	if(strSvcId == "approvalVita"){
        		if(nErrCode < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + strErrMessage);
        		}else {
        			//라디오버튼 setting
        			for(var i = 0; i < this.ds_firstAprvLine.rowcount; i++){
        			
        				if(this.ds_firstAprvLine.getColumn(i, "codeSabun") == this.ds_comment.getColumn(0, "aprvInfoSabun")){
        				
        					//this.Combo00.index = "\"" + i + "\"";
        					this.Combo00.set_index(i);
        					
        					this.ds_comment.setColumn(0, "aprvInfoSabun", 	 this.ds_firstAprvLine.getColumn(i,"codeSabun"));
        					this.ds_comment.setColumn(0, "aprvInfoName", 	 this.ds_firstAprvLine.getColumn(i,"codeName"));
        					this.ds_comment.setColumn(0, "aprvlineAdmUpId",  this.ds_firstAprvLine.getColumn(i,"codeUpId"));
        					this.ds_comment.setColumn(0, "aprvInfoDeptCode", this.ds_firstAprvLine.getColumn(i,"codeDeptCode"));
        					
        					if(this.ds_comment.getColumn(0, "aprvInfoDeptCode") == "001"){
        						this.ds_comment.setColumn(0, "aprvInfoDeptName", "총무부");
        					}else if(this.ds_comment.getColumn(0, "aprvInfoDeptCode") == "002"){
        						this.ds_comment.setColumn(0, "aprvInfoDeptName", "SI사업부");
        					}else{
        						this.ds_comment.setColumn(0, "aprvInfoDeptName", "관리부");
        					}	
        				}else {
        					this.Combo00.set_index(-1);
        				}
        			}
        		}
        	}
        	
        }

        
        this.get_getAprvWriter = function(sabun1) {
        	var strSvcID = "getAprvWriter";  
        	var strURL = "svcurl::approvalProg/getAprvWriter.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_insa=ds_output";
        	var strArgument = "";
        	var strCallbackFunc = "fnCallback2";	
        	
        	strArgument += "insaSabun=" + "\"" + sabun1 + "\"";			
        	
        	this.transaction(strSvcID,
        				strURL,
        				strInDatasets,
        				strOutDatasets,
        				strArgument,
        				strCallbackFunc);

        }

        // 상신창 제목변경
        this.title_change = function (infoStepCode){
        	if(infoStepCode == '001'){
        		this.Div00.set_text("  소제기의뢰 결재상신");
        //		Title = "소제기의뢰 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '002'){
        		this.Div00.set_text("  소송접수 결재상신");
        //		Title = "소송접수 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '003'){
        		this.Div00.set_text("  응소(제소) 보고 결재상신");
        //		Title = "응소(제소) 보고 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '004'){
        		this.Div00.set_text("  조정안관리 결재상신");
        //		Title = "조정안관리 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '005'){
        		this.Div00.set_text("  재판외화해  결재상신");
        //		Title = "재판외화해  결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '006'){
        		this.Div00.set_text("  판결보고 결재상신");
        //		Title = "판결보고 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '007'){
        		this.Div00.set_text("  소송종결 결재상신");
        //		Title = "소송종결 결재상신"; //창 타이틀 변경
        	}   
        }

        // this.fnCallback = function(strSvcId, nErrCode, strErrMessage) {
        // 	
        // 	switch(strSvcId)
        // 	{	
        // 		case "getAprvWriter":
        // 			
        // 			break;
        // 	}
        // 
        // 
        // 	
        // }

        
        // 상신버튼 클릭시 이벤트
        this.Button_numSearch_onclick = function(obj,e)
        {
        	// 유효성 변수
        	var validation = true;
        	var bookNo = this.ds_comment.getColumn(0, "aprvprgrInfoBookNo");
        	
        	if(this.edt_title.text == "") {
        		alert("제목을 입력해주세요.");
        		return;
        	} else if(this.txt_cont.text == "") {
        		alert("내용을 입력해주세요.");
        		return;
        	} else if(this.Combo00.index == -1) {
        		alert("결재자를 선택해주세요.");
        		return;
        	} 
        	
        	if(validation) {
        		if(this.opener.ds_position.rowcount == 1) {
        			if(application.confirm("수정하시겠습니까?") == true){
        				this.insertAprvProg();
        				this.close(bookNo);
        			} else {
        				return;
        			}
        		} else {
        			if(application.confirm("상신하시겠습니까?") == true){
        				this.insertAprvProg();
        				this.close(bookNo);
        			} else {
        				return;
        			}
        		}
        		
        		
        // 		
        // 		
        // 		this.insertAprvProg();
        // 		alert("저장이 완료되었습니다.");
        // 		this.close(bookNo);	
         	}
        }

        // 닫기버튼 클릭시 이벤트
        this.Button_close_onclick = function(obj,e)
        {
        	this.close(bookNo);
        }

        this.insertAprvProg = function() {
        	
        	this.dataSetUp();

        	var strSvcId = "createProg";  
        	var strURL = "svcurl::approval/createProg.do";
        	var strInDatasets = "ds_input=ds_comment:u";
        	var strOutDatasets = "";
        	var strArgument = "";
        	var strCallbackFunc = "fnCallback";
        	var tmpType = "";
        	
        	if(this.ds_comment.getRowType() == 2){
        		tmpType = "INSERT";
        	} else if(this.ds_comment.getRowType() == 4){
        		tmpType = "UPDATE";
        	}

        
        	// 2020.02.04 최광훈
        	// 원인은 잘 모르겠지만 vo가 DataSetRowTypeAccessor로
        	// 정상적으로 형변환이 되지 않아서
        	// 화면단에서 rowType을 String으로 받아서 작성함.. 

        	strArgument += "insaSabun=" + '\"' + sabun + '\"';
        	strArgument += " rowType=" + '\"' + tmpType + '\"';
        	
        // 	trace("광훈 :: " + this.ds_comment.saveXML());
        // 	alert(this.ds_comment.getRowType());
         	this.transaction(strSvcId, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc);
        }

        this.dataSetUp = function() {

        // 	this.ds_comment.clearData();
        // 	this.ds_comment.addRow();

        	this.ds_comment.setColumn(0, "aprvprgrInfoStepCode"     , infoStepCode)
         	this.ds_comment.setColumn(0, "aprvprgrInfoBookNo"       , bookNo);
         	this.ds_comment.setColumn(0, "aprvprgrInfoUpSeq"		, "");
         	this.ds_comment.setColumn(0, "aprvprgrInfoWritSabun"	, application.gds_User.getColumn(application.gds_User.rowposition, "sabun"));
         	this.ds_comment.setColumn(0, "aprvprgrInfoWrit"			, application.gds_User.getColumn(application.gds_User.rowposition, "name"));
         	this.ds_comment.setColumn(0, "aprvprgrInfoWritDeptCode"	, application.gds_User.getColumn(application.gds_User.rowposition, "insaDeptCode"));
         	this.ds_comment.setColumn(0, "aprvprgrInfoWritDeptName"	, application.gds_User.getColumn(application.gds_User.rowposition, "insaDeptName"));
         	this.ds_comment.setColumn(0, "aprvprgrInfoWritCont"		, this.txt_cont.value);
         	this.ds_comment.setColumn(0, "aprvprgrInfoWritTit"		, this.edt_title.value);
         	
        	
        }

        

        

        // this.aprv_comment_cont = function(obj:Form, e:nexacro.LoadEventInfo)
        // {
        // 	this.aprvComment();
        // 	
        // 	trace("!!!!모달성공!!!!");
        // }
        // 
        // 
        // this.aprvComment = function()
        // {
        // 	this.ds_search.setColumn(0, "aprvprgrInfoStepCode", application.gds_aprverInfo.getColumn(0, "aprvprgrInfoStepCode"));
        // 	this.ds_search.setColumn(0, "aprvprgrInfoBookNo", application.gds_aprverInfo.getColumn(0, "aprvprgrInfoBookNo"));
        // 	this.ds_search.setColumn(0, "aprvprgrInfoSeq", application.gds_aprverInfo.getColumn(0, "aprvprgrInfoSeq"));
        // 	
        // 	trace(this.ds_search.saveXML());
        // 	
        // 	this.gfn_transaction(this,
        // 		  "getAprvCommentInfo",
        // 		  "aprvListEmpl/getPayerInfo.do",
        // 		  "ds_search=ds_search",
        // 		  "ds_aprvInfo=ds_aprvInfo",
        // 		  "",
        // 		  "fn_callback");
        // }
        // 
        // 
        // this.fn_callback = function(svcId, errCd, errMsg)
        // {
        // 	trace(this.ds_aprvInfo.saveXML());
        // 	if(svcId == "getAprvCommentInfo")
        // 	{
        // 		if(this.ds_aprvInfo.getColumn(0, "aprvInfoDeptName") != undefined)
        // 		{
        // 			this.Static11.set_text(this.ds_aprvInfo.getColumn(0, "aprvInfoDeptName")+ " "+this.ds_aprvInfo.getColumn(0, "aprvInfoName"));
        // 		}
        // 		if(this.ds_aprvInfo.getColumn(0, "aprvInfoDeptName1") != undefined)
        // 		{
        // 			this.Static22.set_text(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname1")+ " "+this.ds_aprvInfo.getColumn(0, "aprvinfoname1"));
        // 		}
        // 		if(this.ds_aprvInfo.getColumn(0, "aprvInfoDeptName2") != undefined)
        // 		{
        // 			this.Static33.set_text(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname2")+ " "+this.ds_aprvInfo.getColumn(0, "aprvinfoname2"));
        // 		}
        // 	}
        // }

        

        

        this.Combo00_onitemchanged = function(obj,e)
        {
        	var radi = this.Combo00.index;
        	
        	if(radi != null) {
        		this.ds_comment.setColumn(0, "aprvInfoSabun",	 this.ds_firstAprvLine.getColumn(radi, "codeSabun"));
        		this.ds_comment.setColumn(0, "aprvInfoName", 	 this.ds_firstAprvLine.getColumn(radi, "codeName"));
        		this.ds_comment.setColumn(0, "aprvInfoDeptCode", this.ds_firstAprvLine.getColumn(radi, "codeDeptCode"));
        		this.ds_comment.setColumn(0, "aprvlineAdmUpId",  this.ds_firstAprvLine.getColumn(radi, "codeUpId"));
        	}
        	
        	if(this.ds_comment.getColumn(0, "aprvInfoDeptCode") == "001"){
        		this.ds_comment.setColumn(0, "aprvInfoDeptName", "총무부");
        	}else if(this.ds_comment.getColumn(0, "aprvInfoDeptCode") == "002"){
        		this.ds_comment.setColumn(0, "aprvInfoDeptName", "SI사업부");
        	}else{
        		this.ds_comment.setColumn(0, "aprvInfoDeptName", "관리부");
        	}
        		
        	
        }

        
        this.aprv_lock = function(){
        	if(this.opener.ds_position.getColumn(0, "aprvInfoCondCode")=="Y"||this.opener.ds_position.getColumn(0, "aprvInfoCondCode")=="Z"){
        		this.edt_title.set_enable(false);
        		this.txt_cont.set_enable(false);
        		this.Button_save.set_enable(false);
        	}
        }

        

        

        

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.APRV_PROG_COMMENT_onload, this);
            this.Button_close.addEventHandler("onclick", this.Button_close_onclick, this);
            this.Button_save.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("APRV_PROG_COMMENT.xfdl");

       
    };
}
)();
