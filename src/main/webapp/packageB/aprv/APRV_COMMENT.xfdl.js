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
                this.set_name("APRV_COMMENT");
                this.set_titletext("결재자 의견");
                this._setFormPosition(0,0,600,683);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_aprvInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfoname1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfodeptname1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfocont1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfoname2\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfodeptname2\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfocont2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_secondAprvLine", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeSabun\" type=\"STRING\" size=\"256\"/><Column id=\"codeBuseo\" type=\"STRING\" size=\"256\"/><Column id=\"codeBuseoName\" type=\"STRING\" size=\"256\"/><Column id=\"codeUpId\" type=\"STRING\" size=\"256\"/><Column id=\"codeNameSabun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_thirdAprvLine", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeSabun\" type=\"STRING\" size=\"256\"/><Column id=\"codeBuseo\" type=\"STRING\" size=\"256\"/><Column id=\"codeBuseoName\" type=\"STRING\" size=\"256\"/><Column id=\"codeUpId\" type=\"STRING\" size=\"256\"/><Column id=\"codeNameSabun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approval", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position_line", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmSeq\" type=\"INT\" size=\"256\"/><Column id=\"aprvlineAdmUpSeq\" type=\"INT\" size=\"256\"/><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpAprvcode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvIdName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptIdName\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approval_prgr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approvalSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_03", "absolute", "14", "525", "572", "105", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "14", "377", "572", "105", null, null, this);
            obj.set_taborder("37");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "233", "572", "105", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "89", "572", "96", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "572", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  결재자 의견");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "239", "559", "93", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "239", "110", "93", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1차 결재자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "383", "560", "93", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "383", "110", "93", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2차 결재자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "531", "560", "93", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "531", "110", "93", null, null, this);
            obj.set_taborder("6");
            obj.set_text("3차 결재자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "529", "636", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "14", "348", "146", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_font("bold 9 Dotum,굴림");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "14", "495", "146", "25", null, null, this);
            obj.set_taborder("12");
            obj.style.set_font("bold 9 Dotum,굴림");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", "201", "146", "25", null, null, this);
            obj.set_taborder("13");
            obj.style.set_font("bold 9 Dotum,굴림");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "60%", "201", null, "25", "27%", null, this);
            obj.set_taborder("14");
            obj.set_text("2차 결재자");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "442", "201", null, "19", "16", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_secondAprvLine");
            obj.set_codecolumn("codeSabun");
            obj.set_datacolumn("codeNameSabun");
            obj.set_visible("false");
            obj.set_displayrowcount("-1");

            obj = new Static("Static07", "absolute", "60%", "348", null, "25", "27%", null, this);
            obj.set_taborder("16");
            obj.set_text("3차 결재자");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "442", "348", null, "19", "16", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_thirdAprvLine");
            obj.set_codecolumn("codeSabun");
            obj.set_datacolumn("codeNameSabun");
            obj.set_visible("false");

            obj = new Static("Static09", "absolute", "20", "119", "560", "60", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "20", "95", "560", "25", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "20", "95", "104", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "20", "119", "104", "60", null, null, this);
            obj.set_taborder("22");
            obj.set_text("내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_02", "absolute", "470", "636", "55", "23", null, null, this);
            obj.set_taborder("24");
            obj.set_text("반려");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_01", "absolute", "411", "636", "55", "23", null, null, this);
            obj.set_taborder("25");
            obj.set_text("결재");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_00", "absolute", "352", "636", "55", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("전결");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "135", "242", "438", "87", null, null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "135", "386", "439", "87", null, null, this);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "135", "534", "439", "87", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "129", "98", "444", "19", null, null, this);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", "65", "146", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_visible("true");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "129", "122", "445", "54", null, null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 572, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  결재자 의견");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 683, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("결재자 의견");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","TextArea03","value","ds_position","aprvprgrInfoWritCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Edit00","value","ds_position","aprvprgrInfoWritTit");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("APRV_COMMENT.xfdl", "Lib::common.xjs");
        this.registerScript("APRV_COMMENT.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        var comboIndex1 = "";
        var comboIndex2 = "";

        var sabun = "";
        var infoStepCode = "";
        var bookNo = "";

        

        this.fn_callback = function(strSvcId,nErrCode,strErrMessage){
        	
        	switch(strSvcId){
        	
        		case "outList":
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			}
        			
        			this.combobox_setting();
        	
        			if(this.Combo00.visible == true) {
        				// 2차 콤보버튼 세팅
        				for(var i = 0 ; i < this.ds_secondAprvLine.rowcount ; i++){
        					if(this.ds_position.getColumn(1, "aprvInfoSabun") == this.ds_secondAprvLine.getColumn(i, "codeSabun")){
        						comboIndex1 = i;
        					} else if(this.ds_position.getColumn(2, "aprvInfoSabun") == "") {
        						comboIndex1 = -1;
        					}
        				}
        				
        				//this.Combo00.index = comboIndex1;
        				this.Combo00.set_index(comboIndex1);
        				this.Combo00_onitemchanged();
        			}
        			
        			if(this.Combo01.visible == true) {
        				// 3차 콤보버튼 세팅
        				for(var i = 0 ; i < this.ds_thirdAprvLine.rowcount ; i++){
        					if(this.ds_position.getColumn(1, "aprvInfoSabun") == this.ds_thirdAprvLine.getColumn(i, "codeSabun")){
        						comboIndex2 = i;
        					} else if(this.ds_position.getColumn(2, "aprvInfoSabun") == "") {
        						comboIndex2 = -1;
        					}
        				}
        				//this.Combo01.index = comboIndex2;
        				this.Combo01.set_index(comboIndex2);
        				this.Combo01_onitemchanged();
        			}
        						
        			break;
        		
        		// Update 후 delete event
        		case "approvalCommentUpdate":
        	//	alert("approvalCommentUpdate");
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			} else {
        				this.getRaisreqDelete(bookNo);
        			}
        				
        			break;
        			
        		case "approvalDeleteComment":
        	//	alert("approvalDeleteComment");
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			} else {
        				this.getRaisreqInsert();
        			}
        			break;
        			
        		case "approvalComment":
        //		alert("approvalComment");
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			} else {
        				this.getRaisreqDelete4(bookNo);
        			}
        			break;

        			
        		case "approvalDeleteComment4":
        //		alert("approvalDeleteComment4");
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			} else {
        				this.close(bookNo);
        			}
        			
        			break;
        			
        		case "approvalCommentUpdate1":
        	//	alert("approvalCommentUpdate");
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			} else {
        				this.close(bookNo);
        			}
        				
        			break;

        		
        		case "approvalRejectComment":
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			}
        			break;
        			
        	}
        }

        
        this.APRV_COMMENT_onload = function(obj,e)
        {

        	infoStepCode = this.parent.stepCode;
        	bookNo = this.parent.bookNo;
        	dataset = this.parent.dataset;

        	sabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        		
        	this.ds_position.loadXML(dataset);
        	

        	// 제목변경
        	this.title_change(infoStepCode);
        	
        	//공통 부서코드 가져오기?
        	
        	//상신정보 불러오기
        	this.get_aprvInsertList(sabun, bookNo);
        	
        	//전결 버튼 세팅
        // 	alert(this.ds_position.getRowCount());
        // 	alert(sabun);
        // 	alert(this.ds_position.saveXML());
        	
        	for(var i = 0 ; i < this.ds_position.getRowCount(); i++) {
        		if(sabun == this.ds_position.getColumn(i, "aprvInfoSabun")
        			 && this.ds_position.getColumn(i, "aprvlineAdmAdWtr") == "Y"
        			 && this.ds_position.getColumn(i, "aprvInfoSeq") == "3"){
        			this.Button_00.set_visible(false);
        		} else if(sabun == this.ds_position.getColumn(i, "aprvInfoSabun")
        			 && this.ds_position.getColumn(i, "aprvlineAdmAdWtr") == "Y"
        			 && this.ds_position.getColumn(i, "aprvInfoSeq") == "2") {
        			this.Button_00.set_visible(true);
        		}
        	}
        	
        	
        	//상신자와 결재자만 등록할 수 있는 권한 설정
        	if(this.ds_position.getColumn(0, "aprvInfoSabun") == sabun){
        		this.TextArea00.set_enable(true);
        		this.Combo00.set_visible(true);
        		this.Static11.set_visible(true);
        		this.Static06.set_visible(true);
        		this.TextArea01.set_enable(false);
        		this.TextArea02.set_enable(false);
        		this.TextArea03.set_readonly(true);
        		this.Edit00.set_readonly(true);
        	} else if(this.ds_position.getColumn(1, "aprvInfoSabun") == sabun){
        		this.TextArea01.set_enable(true);
        		this.Combo01.set_visible(true);
        		this.Static07.set_visible(true);
        		this.Static22.set_visible(true);
        		this.TextArea02.set_enable(false);
        		this.TextArea03.set_readonly(true);
        		this.Edit00.set_readonly(true);
        	} else if(this.ds_position.getColumn(2, "aprvInfoSabun") == sabun){
        		this.Static33.set_visible(true);
        		this.TextArea02.set_enable(true);
        		this.TextArea03.set_readonly(true);
        		this.Edit00.set_readonly(true);
        	} 
        	
        	
        	
        	// 결재자 의견 데이터 불러오기.
        	this.TextArea00.set_value(this.ds_position.getColumn(0, "aprvInfoCont"));
        	this.TextArea01.set_value(this.ds_position.getColumn(1, "aprvInfoCont"));
        	this.TextArea02.set_value(this.ds_position.getColumn(2, "aprvInfoCont"));
        	
        	
        	// 콤보박스 결재라인 불러오기.
        	this.get_approvalline_PigList(infoStepCode);
        	
        	// 다음 결재자 불러오기.
        // 	this.combobox_setting();
        // 	
        // 	if(this.Combo00.visible == true) {
        // 		for(var i = 0 ; i < this.ds_secondAprvLine.rowcount ; i++){
        // 			if(this.ds_position.getColumn(1, "aprvInfoSabun") == this.ds_secondAprvLine.getColumn(i, "codeSabun")){
        // 				comboIndex1 = i;
        // 			} else if(this.ds_position.getColumn(2, "aprvInfoSabun") == "") {
        // 				comboIndex1 = -1;
        // 			}
        // 		}
        // 		
        // 		this.Combo00.index = comboIndex1;
        // 		this.Combo00_onitemchanged();
        // 	}
        	
        	
        	
        	
        }

        // 상신창 제목변경
        this.title_change = function (infoStepCode){
        	if(infoStepCode == '001'){
        		this.Div00.set_text("  소제기의뢰 결재");
        //		Title = "소제기의뢰 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '002'){
        		this.Div00.set_text("  소송접수 결재");
        //		Title = "소송접수 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '003'){
        		this.Div00.set_text("  응소(제소) 보고 결재");
        //		Title = "응소(제소) 보고 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '004'){
        		this.Div00.set_text("  조정안관리 결재");
        //		Title = "조정안관리 결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '005'){
        		this.Div00.set_text("  재판외화해  결재");
        //		Title = "재판외화해  결재상신"; //창 타이틀 변경
        	}else if(infoStepCode == '006'){
        		this.Div00.set_text("  판결보고 결재신");
        //		Title = "판결보고 결재상신"; //창 타틀 변경
        	}else if(infoStepCode == '007'){
        		this.Div00.set_text("  소송종결 결재");
        //		Title = "소송종결 결재상신"; //창 타이틀 변경
        	}   
        	
        	
        	this.setSta();
        }

        
        //상신 정보 불러오기
        this.get_aprvInsertList = function(sabun,bookNo){
        	var strParam="";									
        	var strSvcid = "aprvInsertList";
        	var strUrl = "svcurl::approval/aprvInsertList.do";
        	var strInputDs = ""; 
        	var strOutputDs = "ds_approval=ds_output";
        	var strFnCallback="fncallback";

        	strParam += "aprvprgrInfoBookNo=" + "\"" + bookNo + "\"";
        	strParam += " aprvInfoSabun=" + "\"" + sabun + "\"";
        	
        	this.transaction(strSvcid
        				, strUrl
        				, strInputDs
        				, strOutputDs
        				, strParam
        				, strFnCallback);
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

        
        this.Button_numSearch_onclick = function(obj,e)
        {
        	this.close();
        }

        
        this.get_approvalline_PigList = function(infoStepCode) {
        	var strSvcid = "outList";
        	var strUrl = "svcurl::approval/approvalPigList.do";
        	var strInputDs = ""; 
        	var strOutputDs = "ds_position_line=ds_output";
        	var strParam = "";
        	var strFnCallback = "fn_callback";
        	
        	
        	strParam += "out_no=" + "\"" + infoStepCode + "\""; 
        	strParam += " out_no1=" + "\"E01\""; 	//E01 - 직책코드
        //	strParam += " out_no2=" + "\"1\""; 		//1- 결재라인이 1인 경우
        	
        	this.transaction(strSvcid
        				, strUrl
        				, strInputDs
        				, strOutputDs
        				, strParam
        				, strFnCallback);
        }

        
        this.combobox_setting = function() {

        	for(var i = 0 ; i < this.ds_position_line.rowcount ; i++){
        		if(this.ds_position_line.getColumn(i, "aprvlineAdmSeq") == "2") {
        			var aRow = this.ds_secondAprvLine.addRow();
        			this.ds_secondAprvLine.setColumn(aRow, "codeName", this.ds_position_line.getColumn(i, "insaName"));
        			this.ds_secondAprvLine.setColumn(aRow, "codeSabun", this.ds_position_line.getColumn(i, "aprvlineAdmAprvId"));
        			this.ds_secondAprvLine.setColumn(aRow, "codeBuseo", this.ds_position_line.getColumn(i, "aprvlineAdmAprvDeptId"));
        			this.ds_secondAprvLine.setColumn(aRow, "codeUpId", this.ds_position_line.getColumn(i, "aprvlineAdmUpId"));
        			this.ds_secondAprvLine.setColumn(aRow, "codeNameSabun", this.ds_position_line.getColumn(i, "insaName") + " (" + this.ds_position_line.getColumn(i, "aprvlineAdmAprvId") + ")");
        			
        		} else if(this.ds_position_line.getColumn(i, "aprvlineAdmSeq") == "3") {
        			var aRow = this.ds_thirdAprvLine.addRow();
        			this.ds_thirdAprvLine.setColumn(aRow, "codeName", this.ds_position_line.getColumn(i, "insaName"));
        			this.ds_thirdAprvLine.setColumn(aRow, "codeSabun", this.ds_position_line.getColumn(i, "aprvlineAdmAprvId"));
        			this.ds_thirdAprvLine.setColumn(aRow, "codeBuseo", this.ds_position_line.getColumn(i, "aprvlineAdmAprvDeptId"));
        			this.ds_thirdAprvLine.setColumn(aRow, "codeUpId", this.ds_position_line.getColumn(i, "aprvlineAdmUpId"));
        			this.ds_thirdAprvLine.setColumn(aRow, "codeNameSabun", this.ds_position_line.getColumn(i, "insaName") + " (" + this.ds_position_line.getColumn(i, "aprvlineAdmAprvId") + ")");
        		}
        	}
        	
        // 	alert(this.ds_secondAprvLine.saveXML());
        // 	alert(this.ds_thirdAprvLine.saveXML());
        	
        	
        // 	this.Combo00.index = -1;
        // 	this.Combo01.index = -1;

        	this.Combo00.set_index(-1);
        	this.Combo01.set_index(-1);

        	
        	
        	this.ds_approval_prgr.addRow();
        	this.ds_approval_prgr.setColumn(0, "aprvprgrInfoStepCode", infoStepCode);
        	this.ds_approval_prgr.setColumn(0, "aprvprgrInfoBookNo", bookNo);
        	this.ds_approval_prgr.setColumn(0, "aprvprgrInfoSeq", this.ds_approval.getColumn(0, "aprvprgrInfoSeq"));
        	this.ds_approval_prgr.setColumn(0, "aprvInfoReqDate", this.ds_approval.getColumn(0, "aprvInfoReqDate"));
        	this.ds_approval_prgr.setColumn(0, "aprvInfoSeq", this.ds_approval.getColumn(0, "aprvInfoSeq"));
        	this.ds_approval_prgr.setColumn(0, "aprvInfoCondCode", "N");
        	this.ds_approvalSeq.addRow();
        	
        }
        this.Combo00_onitemchanged = function(obj,e)
        {
        	var Radi = this.Combo00.index;
        	
        	if(Radi != null) {
        		this.ds_approval_prgr.setColumn(0, "aprvInfoSabun", this.ds_secondAprvLine.getColumn(Radi, "codeSabun"));
        		this.ds_approval_prgr.setColumn(0, "aprvInfoName", this.ds_secondAprvLine.getColumn(Radi, "codeName"));
        		this.ds_approval_prgr.setColumn(0, "aprvInfoDeptCode", this.ds_secondAprvLine.getColumn(Radi, "codeBuseo"));
        		this.ds_approval_prgr.setColumn(0, "aprvlineAdmUpId", this.ds_secondAprvLine.getColumn(Radi, "codeUpId"));
        		
        		if(this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "001") {
        			this.ds_approval_prgr.setColumn(0, "aprvInfoDeptName", "총무부");
        		} else if (this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "002"){
        			this.ds_approval_prgr.setColumn(0, "aprvInfoDeptName", "SI사업부");
        		} else if (this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "003"){
        			this.ds_approval_prgr.setColumn(0, "aprvInfoDeptName", "관리부");
        		}
        		
        		
        		this.ds_approvalSeq.setColumn(0, "aprvInfoSabun", this.ds_secondAprvLine.getColumn(Radi,"codeSabun"));
        		this.ds_approvalSeq.setColumn(0, "aprvInfoName", this.ds_secondAprvLine.getColumn(Radi,"codeName"));
        		this.ds_approvalSeq.setColumn(0, "aprvInfoDeptCode", this.ds_secondAprvLine.getColumn(Radi,"codeBuseo"));	
        		this.ds_approvalSeq.setColumn(0, "aprvlineAdmUpId", this.ds_secondAprvLine.getColumn(Radi,"codeUpId"));
        		
        		if(this.ds_approvalSeq.getColumn(0, "aprvInfoDeptCode") == "001"){
        			this.ds_approvalSeq.setColumn(0, "aprvInfoDeptName", "총무부");
        		}else if(this.ds_approvalSeq.getColumn(0, "aprvInfoDeptCode") == "002"){
        			this.ds_approvalSeq.setColumn(0, "aprvInfoDeptName", "SI사업부");
        		}else if(this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "003"){
        			this.ds_approvalSeq.setColumn(0, "aprvInfoDeptName", "관리부");
        		}		

        
        	}
        }

        

        this.Combo01_onitemchanged = function(obj,e)
        {
        	var Radi = this.Combo01.index;
        	
        	if(Radi != null) {
        		this.ds_approval_prgr.setColumn(0, "aprvInfoSabun", this.ds_thirdAprvLine.getColumn(Radi, "codeSabun"));
        		this.ds_approval_prgr.setColumn(0, "aprvInfoName", this.ds_thirdAprvLine.getColumn(Radi, "codeName"));
        		this.ds_approval_prgr.setColumn(0, "aprvInfoDeptCode", this.ds_thirdAprvLine.getColumn(Radi, "codeBuseo"));
        		this.ds_approval_prgr.setColumn(0, "aprvlineAdmUpId", this.ds_thirdAprvLine.getColumn(Radi, "codeUpId"));
        		
        		if(this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "001") {
        			this.ds_approval_prgr.setColumn(0, "aprvInfoDeptName", "총무부");
        		} else if (this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "002"){
        			this.ds_approval_prgr.setColumn(0, "aprvInfoDeptName", "SI사업부");
        		} else if (this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "003"){
        			this.ds_approval_prgr.setColumn(0, "aprvInfoDeptName", "관리부");
        		}
        		
        		
        		this.ds_approvalSeq.setColumn(0, "aprvInfoSabun", this.ds_thirdAprvLine.getColumn(Radi,"codeSabun"));
        		this.ds_approvalSeq.setColumn(0, "aprvInfoName", this.ds_thirdAprvLine.getColumn(Radi,"codeName"));
        		this.ds_approvalSeq.setColumn(0, "aprvInfoDeptCode", this.ds_thirdAprvLine.getColumn(Radi,"codeBuseo"));	
        		this.ds_approvalSeq.setColumn(0, "aprvlineAdmUpId", this.ds_thirdAprvLine.getColumn(Radi,"codeUpId"));
        		
        		if(this.ds_approvalSeq.getColumn(0, "aprvInfoDeptCode") == "001"){
        			this.ds_approvalSeq.setColumn(0, "aprvInfoDeptName", "총무부");
        		}else if(this.ds_approvalSeq.getColumn(0, "aprvInfoDeptCode") == "002"){
        			this.ds_approvalSeq.setColumn(0, "aprvInfoDeptName", "SI사업부");
        		}else if(this.ds_approval_prgr.getColumn(0, "aprvInfoDeptCode") == "003"){
        			this.ds_approvalSeq.setColumn(0, "aprvInfoDeptName", "관리부");
        		}		

        
        	}
        }

        this.Button_01_onclick = function(obj,e)
        {
        	if (this.ds_position.getColumn(0,"aprvInfoSabun") == sabun){
        		this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea00.value);
        	} else if (this.ds_position.getColumn(1,"aprvInfoSabun") == sabun){
        		this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea01.value);
        	} else if (this.ds_position.getColumn(2,"aprvInfoSabun") == sabun){
        		this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea02.value);
        	} else{	
        	
        	}

        	// 유효성 변수
        	var validation = true;
        	
        	// 2차,3차 결제 등록 시 유효성 체크
        	if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "A"){
        		alert("전결 되었습니다.");
        		validation=false;
        	}else if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "Z"){
        		alert("반려 되었습니다.");
        		validation=false;
        	}
        	
        	if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 1){
        		if(this.TextArea00.value == ""){	
        			alert("결재 내용을 입력 해주십시오.");
        			this.TextArea0.setFocus();
        			validation=false;
        		}else if(this.Combo00.index == "-1" && this.Combo00.visible == true){
        			alert("다음 결재자를 선택하세요");
        			this.Combo00.dropdown();
        			validation=false;
        		}
        	}else if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 2){
        		if(this.TextArea01.value == ''){	
        			alert("결재 내용을 입력 해주십시오.");
        			this.TextArea1.setFocus();
        			validation=false;
        		}else if(this.Combo01.index == "-1" && this.Combo01.visible == true){
        			alert("다음 결재자를 선택하세요");
        			this.Combo01.dropdown();
        			validation=false;
        		}
        	}else if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 3){
        		if(this.TextArea02.value == ''){	
        			alert("결재 내용을 입력 해주십시오.");
        			this.TextArea02.setFocus();
        			validation=false;
        		}
        	}
        	
        	// 2차,3차 결재 실행
        	if(validation){
        		var con01 = false;
        		if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "Y"){
        			if (application.confirm("수정하시겠습니까?") == true){
        				con01=true;
        			}
        		}else{
        			if (application.confirm("결재하시겠습니까?") == true){
        				con01=true;
        			}	
        		}
        		if(con01){
        			this.Button_02.set_visible(false);
        			
        			this.getRaisreqUpdate();
        			
        			//this.close(bookNo);
        		
        		}
        	}
        	
        	
        	//this.close(bookNo);
        }

        // 결재버튼
        this.getRaisreqUpdate = function() {
        	var strSvcID_3 = "approvalCommentUpdate";
        	var strURL_3 = "svcurl::approval/approvalCommentUpdate.do";
        	var strInDatasets_3 = "ds_input=ds_approval:u";
        	var strOutDatasets_3 = "";
        	var strArgument_3 = ""; // "voClass='pdsystem.approval.model.ApprovalTotalVO";
        	var strCallbackFunc_3 = "fn_callback";
        	  
        	this.transaction(strSvcID_3,
        				strURL_3,
        				strInDatasets_3,
        				strOutDatasets_3,
        				strArgument_3,
        				strCallbackFunc_3);
        }

        // 반려버튼
        this.Button_02_onclick = function(obj,e)
        {
        	// 유효성 변수
        	var validation = true;
        	
        	// 의견 반려 시 유효성 체크
        	if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "Y"){
        		alert("결재가 진행중 입니다.");
        		validation = false;
        	}else if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "A"){
        		alert("전결 되었습니다.");
        		validation = false;
        	}
        	
        	if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 1){
        		if(this.TextArea00.value == ''){	
        			alert("반려 내용을 입력 해주십시오.");
        			validation=false;
        		}
        	}else if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 2){
        		if(this.TextArea01.value == ''){	
        			alert("반려 내용을 입력 해주십시오.");
        			validation = false;
        		}
        	}else if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 3){
        		if(this.TextArea02.value == ''){	
        			alert("반려 내용을 입력 해주십시오.");
        			validation = false;
        		}
        	}	
        		
        	//의견 반려 실행
        	if(validation){ 
        		if (application.confirm("반려하시겠습니까?") == true){
        			if(this.ds_position.getColumn(0,"aprvInfoSabun") == sabun){
        				this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea00.value);
        			}else if(this.ds_position.getColumn(1,"aprvInfoSabun") == sabun){
        				this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea01.value);
        			}else if(this.ds_position.getColumn(2,"aprvInfoSabun") == sabun){
        				this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea02.value);
        			}
        			
        			this.approvalCommentReject();
        			
        			this.close(bookNo);
        			
        		}else{
        			return;
        		}
        	}	
        }

        this.approvalCommentReject = function(){
        	var strSvcID_5 = "approvalRejectComment";
        	var strURL_5 = "svcurl::approval/approvalrejectComment.do";
        	var strInDatasets_5 = "ds_input=ds_approval:u";
        	var strOutDatasets_5 = "";
        	var strArgument_5 = ""; //"voClass='pdsystem.approval.model.ApprovalTotalVO";
        	var strCallbackFunc_5 = "fn_callback";
        	  
        	this.transaction(strSvcID_5,
        				strURL_5,
        				strInDatasets_5,
        				strOutDatasets_5,
        				strArgument_5,
        				strCallbackFunc_5);

        }

        this.getRaisreqDelete = function(bookNo) {
        	var strParam_4 ="";
            var strSvcID_4  = "approvalDeleteComment";				
        	var strURL_4 = "svcurl::approval/approvalDeleteComment.do";
        	var strInDatasets_4 ="";
        	var strOutDatasets_4 ="";
        	var strCallbackFunc_4  ="fn_callback";	

        	strParam_4 +="APRVPRGR_INFO_BOOK_NO=" + "\"" + bookNo + "\"";
            strParam_4 +=" APRVPRGR_INFO_STEP_CODE="  + "\"" + infoStepCode + "\""; 
        	this.transaction(strSvcID_4,
        				strURL_4,
        				strInDatasets_4,
        				strOutDatasets_4,
        				strParam_4,
        				strCallbackFunc_4);
        }

        this.getRaisreqInsert = function() {
        	var strSvcID_2 = "approvalComment";
        	var strURL_2 = "svcurl::approval/approvalComment.do";
        	var strInDatasets_2 = "ds_input=ds_approval_prgr:A";
        	var strOutDatasets_2 = "";
        	var strArgument_2 = ""; //"voClass='pdsystem.approval.model.ApprovalTotalVO";
        	var strCallbackFunc_2 = "fn_callback";
        	  
        	this.transaction(strSvcID_2,
        				strURL_2,
        				strInDatasets_2,
        				strOutDatasets_2,
        				strArgument_2,
        				strCallbackFunc_2);
        }

        
        this.getRaisreqDelete4 = function() {
        	var strParam_5 ="";
            var strSvcID_5  = "approvalDeleteComment4";				
        	var strURL_5 = "svcurl::approval/approvalDeleteComment4.do";
        	var strInDatasets_5 ="";
        	var strOutDatasets_5 ="";
        	var strCallbackFunc_5  ="fn_callback";	

        	strParam_5 +="APRVPRGR_INFO_BOOK_NO=" + "\"" + bookNo + "\"";
        	this.transaction(strSvcID_5,
        				strURL_5,
        				strInDatasets_5,
        				strOutDatasets_5,
        				strParam_5,
        				strCallbackFunc_5);
        }

        // 전결 버튼
        this.Button_00_onclick = function(obj,e)
        {
        	// 유효성 변수
        	var validation = true;
        	
        	if(this.ds_position.getColumn(0,"aprvInfoSabun") == sabun){
        		this.ds_approval.setColumn(0, "aprvInfoCont", this.TextArea00.value);
        	}else if(this.ds_position.getColumn(1,"aprvInfoSabun") == sabun){
        		this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea01.value);
        	}else if(this.ds_position.getColumn(2,"aprvInfoSabun") == sabun){
        		this.ds_approval.setColumn(0, "aprvInfoCont",this.TextArea02.value);
        	}else{
        	
        	}
        	
        	// 2차,3차 결재 등록 시 유효성 체크
        	if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "Y"){
        		alert("결재가 진행중 입니다.");
        		validation = false;
        	}else if(this.ds_approval.getColumn(0, "aprvInfoCondCode") == "Z"){
        		alert("반려 되었습니다.");
        		validation = false;
        	}
        	
        	if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 1){
        		if(this.TextArea00.value == ''){	
        			alert("전결 내용을 입력 해주십시오.");
        			validation = false;
        		}
        	}else if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 2){
        		if(this.TextArea01.value ==  ''){	
        			alert("전결 내용을 입력 해주십시오.");
        			validation = false;
        		}
        	}else if(this.ds_approval.getColumn(0, "aprvInfoSeq") == 3){
        		if(this.TextArea02.value == ''){	
        			alert("전결 내용을 입력 해주십시오.");
        			validation = false;
        		}
        	}
        		
        	// 2차,3차 전결 실행												
        	if(validation){ 							
        		if (application.confirm("전결하시겠습니까?") == true){
        			this.ds_approval.setColumn(0, "aprvInfoCondCode", "A");
        			
        			var strSvcID_3 = "approvalCommentUpdate1";
        			var strURL_3 = "svcurl::approval/approvalCommentUpdate.do";
        			var strInDatasets_3 = "ds_input=ds_approval:u";
        			var strOutDatasets_3 = "";
        			var strArgument_3 = ""; //"voClass='pdsystem.approval.model.ApprovalTotalVO";
        			var strCallbackFunc_3 = "fn_callback";
        			  
        			this.transaction(strSvcID_3,
        						strURL_3,
        						strInDatasets_3,
        						strOutDatasets_3,
        						strArgument_3,
        						strCallbackFunc_3);
        						
        			this.close(bookno);
        			
        		}else{
        			return;
        		}
        	}
        }

        this.setSta = function() {
        	this.Static13.set_text(this.ds_position.getColumn(0, "aprvprgrInfoWritDeptName") + " " + this.ds_position.getColumn(0, "aprvprgrInfoWrit"));
        //GetColumn(0,"aprvInfoDeptName")+" "+GetColumn(0,"aprvInfoName")	;
        	this.Static11.set_text(this.ds_position.getColumn(0, "aprvInfoDeptName") + " " + this.ds_position.getColumn(0, "aprvInfoName"));
        	this.Static22.set_text(this.ds_position.getColumn(1, "aprvInfoDeptName") + " " + this.ds_position.getColumn(1, "aprvInfoName"));
        	this.Static33.set_text(this.ds_position.getColumn(2, "aprvInfoDeptName") + " " + this.ds_position.getColumn(2, "aprvInfoName"));
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.APRV_COMMENT_onload, this);
            this.addEventHandler("oninit", this.APRV_COMMENT_oninit, this);
            this.Button_close.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Button_02.addEventHandler("onclick", this.Button_02_onclick, this);
            this.Button_01.addEventHandler("onclick", this.Button_01_onclick, this);
            this.Button_00.addEventHandler("onclick", this.Button_00_onclick, this);

        };

        this.loadIncludeScript("APRV_COMMENT.xfdl");

       
    };
}
)();
