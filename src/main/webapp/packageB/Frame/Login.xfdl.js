﻿(function()
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
                this.set_name("Login");
                this.set_classname("Login");
                this.set_titletext("Login");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,450,290);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_idpw", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"insaId\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaPwd\" type=\"STRING\" size=\"256\"/><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaStat\" type=\"STRING\" size=\"256\"/><Column id=\"insaPutWtr\" type=\"STRING\" size=\"256\"/><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"insaAdmYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_login", "absolute", "0", "0", "450", "310", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::LOGINBG.png')");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Edit("txt_userId", "absolute", "103", "136", "150", "25", null, null, this.div_login);
            obj.set_taborder("27");
            obj.set_displaynulltext("User ID");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("txt_userPwd", "absolute", "103", "165", "150", "25", null, null, this.div_login);
            obj.set_taborder("28");
            obj.set_password("true");
            obj.set_displaynulltext("Password");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", null, "136", "60", "50", "127", null, this.div_login);
            obj.set_taborder("29");
            obj.set_text("로그인");
            obj.set_wordwrap("char");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_close", "absolute", null, "8", "29", "19", "15", null, this.div_login);
            obj.set_taborder("30");
            obj.set_text("X");
            obj.set_visible("false");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new CheckBox("legal_checkbox", "absolute", "106", "194", null, "22", "197", null, this.div_login);
            obj.set_taborder("31");
            obj.set_text("법률관계자 로그인");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_join", "absolute", "332", "136", "60", "50", null, null, this.div_login);
            obj.set_taborder("32");
            obj.set_text("회원가입");
            obj.style.set_background("URL('img::btn_WF_crud_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("100");
            obj.style.set_shadow("outer 0,0 0 gray");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("programmar", "absolute", "784", "104", "115", "22", null, null, this.div_login);
            obj.set_taborder("33");
            obj.set_text("개발전용로그인");
            obj.style.set_color("#333333ff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("100");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "4", "223", "70", "27", null, null, this.div_login);
            obj.set_taborder("34");
            obj.set_text("    관리자    2013102001");
            obj.set_wordwrap("char");
            obj.style.set_background("@gradation");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "78", "223", "70", "27", null, null, this.div_login);
            obj.set_taborder("35");
            obj.set_text("    민성운    2013102002");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "152", "223", "70", "27", null, null, this.div_login);
            obj.set_taborder("36");
            obj.set_text("    박연주    2013102012");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "227", "223", "70", "27", null, null, this.div_login);
            obj.set_taborder("37");
            obj.set_text("    신윤권    2013102011");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "301", "223", "70", "27", null, null, this.div_login);
            obj.set_taborder("38");
            obj.set_text("    이하늘    2013102008");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "375", "223", "70", "27", null, null, this.div_login);
            obj.set_taborder("39");
            obj.set_text("    전지희    2001030402");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "4", "253", "70", "27", null, null, this.div_login);
            obj.set_taborder("40");
            obj.set_text("    한현진    2013102009");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button08", "absolute", "78", "253", "70", "27", null, null, this.div_login);
            obj.set_taborder("41");
            obj.set_text("    신미향    2014021201");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button09", "absolute", "152", "253", "70", "27", null, null, this.div_login);
            obj.set_taborder("42");
            obj.set_text("    김유나    2013032901");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "227", "253", "70", "27", null, null, this.div_login);
            obj.set_taborder("43");
            obj.set_text("    이세형    2013102003");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button11", "absolute", "301", "253", "70", "27", null, null, this.div_login);
            obj.set_taborder("44");
            obj.set_text("    허성렬    2013102007");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", "375", "253", "70", "27", null, null, this.div_login);
            obj.set_taborder("45");
            obj.set_text(" 외부변호사   2013082601");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            obj.style.set_font("8 Dotum");
            this.div_login.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 553, 321, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::LOGINBG.png')");
            		p.set_scrollbars("none");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 450, 290, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Login");
            		p.style.set_background("transparent");
            		p.set_titletext("Login");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Login.xfdl", "Lib::common.xjs");
        this.registerScript("Login.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : Login.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 로그인 화면
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "Lib::common.xjs";

        
        /***********************************************************************************
        * Global/Local Variable
        ***********************************************************************************/

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.form_onload = function (obj,e)
        {
        	if(nexacro.Browser == "Runtime") this.div_login.btn_close.set_visible(true);

        	Iject.formOnload(obj);
        	this.form_onsize();
        }

         
        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        /**
        * form onsize
        * @return 
        * @example
        * @memberOf public
        */ 
        this.form_onsize = function()
        {
          	if(nexacro.Browser == "Runtime") return;

          	var nLeft = (application.mainframe.width / 2) - Math.round((this.div_login.getOffsetWidth()) / 2);
          	var nTop = (application.mainframe.height / 2) - Math.round((this.div_login.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.div_login.setOffsetLeft(0);
        	}
        	else
        	{
            	this.div_login.setOffsetLeft(nLeft);
        		this.div_login.setOffsetTop(nTop);
        	}
        }

        
        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        this.btn_login_onclick = function(obj,e)
        {
            if(this.div_login.legal_checkbox.value==true)
            {
        		this.fn_outLogin();
            }
            else
            {
        		this.fn_login();
            }
        }

        //법률관계자 로그인
        this.fn_outLogin = function()
        {
        	this.ds_idpw.clearData();
        	application.gds_User.clearData();
        	
        	// id 입력 안했을때
        	if(this.gfn_IsNull(this.div_login.txt_userId.value)){
        		this.alert("ID를 입력해주시기 바랍니다.");
        		return;
        	}
        	// pw 입력 안했을때
        	if(this.gfn_IsNull(this.div_login.txt_userPwd.value)){
        		this.alert("비밀번호를 입력해주시기 바랍니다.");
        		return;
        	}
        	
        	var idValue = this.gfn_Trim(this.div_login.txt_userId.value);
        	var pwdValue = this.gfn_Trim(this.div_login.txt_userPwd.value);
        	
        	var strParam = "id="+idValue+" pwd="+pwdValue;
        	
        	this.gfn_transaction(this,
        						"outLoginCheck",
        						"administrator/outLogin.do",
        						"",
        						"ds_idpw=ds_output",
        						strParam,
        						"transaction_callback"
        						);
        	
        }

        //일반 login function
        this.fn_login = function()
        {
        	this.ds_idpw.clearData();
        	application.gds_User.clearData();
        	
        	// id 입력 안했을때
        	if(this.gfn_IsNull(this.div_login.txt_userId.value)){
        		this.alert("ID를 입력해주시기 바랍니다.");
        		return;
        	}
        	// pw 입력 안했을때
        	if(this.gfn_IsNull(this.div_login.txt_userPwd.value)){
        		this.alert("비밀번호를 입력해주시기 바랍니다.");
        		return;
        	}
        	
        	var idValue = this.gfn_Trim(this.div_login.txt_userId.value);
        	var pwdValue = this.gfn_Trim(this.div_login.txt_userPwd.value);
        	
        	var strParam = "id=" + idValue + " pwd=" + pwdValue;
        	
        	this.gfn_transaction(this,
        						"loginCheck",
        						"administrator/login.do",
        						"",
        						"ds_idpw=ds_output",
        						strParam,
        						"transaction_callback"
        						);
        	
        }

        // 트랜잭션 콜백
        this.transaction_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	if(sSvcId == "loginCheck"){
        		
        		var msg = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "msg");
        	
        		if(msg == "ok"){

        			var insaSabun = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaSabun");
        			var insaId = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaId");
        			var insaDeptCode = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaDeptCode");
        			var insaDeptName = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaDeptName");
        			var insaName = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaName");
        			var insaAdmYn = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaAdmYn");
        			
        			if(this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaStat") == "002"){
        				
        				if(this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaPutWtr") !== 'N'){
        					application.gds_User.addRow();
        					application.gds_User.setColumn(application.gds_User.rowposition, "name", insaName);
        					application.gds_User.setColumn(application.gds_User.rowposition, "id", insaId);
        					application.gds_User.setColumn(application.gds_User.rowposition, "sabun", insaSabun);
        					application.gds_User.setColumn(application.gds_User.rowposition, "insaDeptCode", insaDeptCode);
        					application.gds_User.setColumn(application.gds_User.rowposition, "insaDeptName", insaDeptName);
        					
        					trace("gds_User : "+application.gds_User.getColumn(application.gds_User.rowposition, "name"));
        					
        					//권한 추가 -> admin 로그인 시 메뉴 필터링
        					application.gds_User.setColumn(application.gds_User.rowposition, "menuAuth", insaAdmYn);
        					Iject.$["leftFrame"].form.fnMenuFilterByAuth(insaAdmYn);
        					
        					var oArgs = "close";
        					trace("확인 :: "+ typeof Iject.popClose);
        					Iject.popClose(this,oArgs);
        					
        				}
        				else
        				{
        					this.null_text("로그인 권한이 없습니다.");
        				}
        				
        			}else if(this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaStat") == "003"){
        				this.null_text("승인거부입니다. 관리자에게 문의해주세요.");
        			}else if(this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaStat") == "004"){
        				this.null_text("로그인 보류입니다. 관리자에게 문의해주세요.");
        			}else{
        				this.null_text("로그인 권한이 없습니다.");
        			}
        		}else if(msg == "password"){
        			this.null_text("아이디나 암호를 확인해주세요");
        		}else if(msg == "none"){
        			this.null_text("아이디가 존재하지 않습니다.");
        		}
        	}//end login_callback
        	
        	//법률관계자 login_callback
        	if(sSvcId == "outLoginCheck"){
        		
        		var msg = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "msg");
        		
        		if(msg == "ok"){
        			
        			var insaSabun = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaSabun");
        			var insaId = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaId");
        			var insaDeptCode = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaDeptCode");
        			var insaDeptName = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaDeptName");
        			var insaName = this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaName");
        			
        			if(this.ds_idpw.getColumn(this.ds_idpw.rowposition, "insaSabun") != null)
        			{
        				application.gds_User.addRow();
        				application.gds_User.setColumn(application.gds_User.rowposition, "name", insaName);
        				application.gds_User.setColumn(application.gds_User.rowposition, "id", insaId);
        				application.gds_User.setColumn(application.gds_User.rowposition, "sabun", insaSabun);
        				application.gds_User.setColumn(application.gds_User.rowposition, "insaDeptCode", insaDeptCode);
        				application.gds_User.setColumn(application.gds_User.rowposition, "insaDeptName", insaDeptName);
        				
        				trace("gds_User : "+application.gds_User.getColumn(application.gds_User.rowposition, "name"));
        				
        				//권한 추가 -> 외부 변호사 로그인 시 메뉴 필터링
        				application.gds_User.setColumn(application.gds_User.rowposition, "menuAuth", 'O');
        				Iject.$["leftFrame"].form.fnMenuFilterByAuth('O');
        				
        				var oArgs = "close";
        				Iject.popClose(this,oArgs);
        			}
        			else
        			{
        				this.null_text("로그인 권한이 없습니다.");
        			}
        			
        		}
        		else if(msg == "password")
        		{
        			this.null_text("아이디나 암호를 확인해주세요");
        		}
        		else if(msg == "none")
        		{
        			this.null_text("아이디가 존재하지 않습니다.");
        		}
        	}//end outLogin_callback
        }//end callback 함수	

        // 경고창 및 edit component set null
        this.null_text = function(msg)
        {
        	this.alert(msg);
        	this.div_login.txt_userId.set_value(null);
        	this.div_login.txt_userPwd.set_value(null);
        	this.div_login.txt_userId.setFocus();
        }

        
        /**
        * 프레임 open
        * @return 
        * @example
        * @memberOf public
        */ 

        this.fn_menuOpen = function()
        {
            gv_vFrameSet.set_separatesize("0,*,42");
            gv_workFrame.frames["MainForm"].setFocus();
        }

        
        this.Login_onsize = function(obj,e)
        {
             this.form_onsize(e.cx, e.cy);
        }

        this.fn_close = function(obj,e)
        {
        	application.exit();
        }

        this.login_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btn_login_onclick();
        	}
        }

        //개발자전용 로그인
        this.programmar_onclick = function(obj,e)
        {
        	var oArgs = "close";
            Iject.popClose(this,oArgs);
        }

        // 회원가입 모달창
        this.btn_join_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("member"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "member::member.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	system.showModalWindow(newChild, 
        							"memberModal",
        							this.getOwnerFrame(),
        							"",
        							this);
        }

        

        this.legal_checkbox_onclick = function(obj,e)
        {
        	trace("checkBox value : "+this.div_login.legal_checkbox.value);
        }

        // 관리자 로그인
        this.Button01_onclick = function(obj,e)
        {
        	// 관리자 아이디는 원래 관리자유무 체크값이 있어야 함(TAB_INSA의 INSA_ADM_YN)
        	// As-Is는 대표이사님 아이디를 하드코딩 했고, To-be는 로그인에서 따로 체크하지 않음
        	this.div_login.txt_userId.set_value("admin");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        // 이하 사원 로그인 프리셋
        this.Button02_onclick = function(obj,e)
        {
        	// 민성운
        	this.div_login.txt_userId.set_value("1234");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button03_onclick = function(obj,e)
        {
        	// 박연주
        	this.div_login.txt_userId.set_value("parkyj");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button04_onclick = function(obj,e)
        {
        	// 신윤권
        	this.div_login.txt_userId.set_value("3333");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button05_onclick = function(obj,e)
        {
        	// 이하늘
        	this.div_login.txt_userId.set_value("1111");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button06_onclick = function(obj,e)
        {
        	// 전지희
        	this.div_login.txt_userId.set_value("003");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button07_onclick = function(obj,e)
        {
        	// 한현진
        	this.div_login.txt_userId.set_value("hanhj");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button08_onclick = function(obj,e)
        {
        	// 신미향
        	this.div_login.txt_userId.set_value("shinmh");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button09_onclick = function(obj,e)
        {
        	// 김유나
        	this.div_login.txt_userId.set_value("002");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button10_onclick = function(obj,e)
        {
        	// 이세형
        	this.div_login.txt_userId.set_value("leesh");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        this.Button11_onclick = function(obj,e)
        {
        	// 허성렬
        	this.div_login.txt_userId.set_value("huhsr");
        	this.div_login.txt_userPwd.set_value("1111");
        	sSvcId = "loginCheck";
        	this.fn_login();
        }

        // 법률관계자 로그인 프리셋
        this.Button12_onclick = function(obj,e)
        {
        	this.div_login.txt_userId.set_value("2013082601");
        	this.div_login.txt_userPwd.set_value("1234");
        	sSvcId = "outLoginCheck";
        	this.alert("법률관계자로 로그인합니다.");
        	/*this.alert("value" + txt_userId.value);*/
        	this.fn_outLogin();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.Login_onsize, this);
            this.div_login.txt_userId.addEventHandler("oneditclick", this.div_login_txt_userId_oneditclick, this);
            this.div_login.txt_userPwd.addEventHandler("onkeydown", this.login_onkeydown, this);
            this.div_login.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.div_login.btn_login.addEventHandler("onkeyup", this.div_login_btn_login_onkeyup, this);
            this.div_login.btn_close.addEventHandler("onclick", this.fn_close, this);
            this.div_login.legal_checkbox.addEventHandler("onclick", this.legal_checkbox_onclick, this);
            this.div_login.btn_join.addEventHandler("onclick", this.btn_join_onclick, this);
            this.div_login.programmar.addEventHandler("onclick", this.programmar_onclick, this);
            this.div_login.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.div_login.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.div_login.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.div_login.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.div_login.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.div_login.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.div_login.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.div_login.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.div_login.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.div_login.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.div_login.Button11.addEventHandler("onclick", this.Button11_onclick, this);
            this.div_login.Button12.addEventHandler("onclick", this.Button12_onclick, this);

        };

        this.loadIncludeScript("Login.xfdl");

       
    };
}
)();