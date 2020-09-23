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
                this.set_name("member002");
                this.set_titletext("회원가입창");
                this._setFormPosition(0,0,480,318);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insa", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"eng_name\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"reg_no\" type=\"STRING\" size=\"256\"/><Column id=\"hp\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"addr1\" type=\"STRING\" size=\"256\"/><Column id=\"addr2\" type=\"STRING\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_check", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg1", "absolute", "9", "64", "461", "250", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "70", "89", "395", "25", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "70", "137", "395", "25", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "70", "161", "395", "25", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "70", "209", "395", "25", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "70", "185", "395", "25", null, null, this);
            obj.set_taborder("37");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "70", "233", "395", "25", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "70", "113", "395", "25", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "187", "280", "55", "23", null, null, this);
            obj.set_taborder("13");
            obj.set_text("가입");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_shadow("outer 0,0 0 gray");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "251", "280", "55", "23", null, null, this);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_shadow("outer 0,0 0 gray");
            obj.getSetter("titletext").set("회원가입창");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute", "absolute", "377", "210", "65", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("주소 검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "339", "188", "120", "19", null, null, this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "114", "212", "241", "19", null, null, this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "114", "164", "120", "19", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("english,dot,symbol");
            obj.set_displaynulltext("예) test@test.com");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "114", "116", "120", "19", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "114", "92", "120", "19", null, null, this);
            obj.set_taborder("0");
            obj.set_inputtype("numberandenglish");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "339", "92", "120", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_inputtype("numberandenglish");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "339", "140", "120", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_inputtype("english,space");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "114", "187", "120", "19", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">알수없음</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Edit("Edit10", "absolute", "114", "236", "345", "19", null, null, this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "339", "116", "120", "19", null, null, this);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_inputtype("numberandenglish");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "80.58%", "267", null, "35", "2.92%", null, this);
            obj.setProperty("taborder", "17");
            obj.setProperty("classid", "{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj.setProperty("windowed", "true");
            obj.setProperty("popupstyle", "true");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "114", "140", "51", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_maxlength("6");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "339", "164", "120", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_displaynulltext("'-' 제외 숫자만 입력");
            obj.set_mask("###-####-####");
            obj.set_type("string");
            obj.style.set_align("center middle");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("joinTitle", "absolute", "9", "6", "463", "50", null, null, this);
            obj.set_taborder("18");
            obj.set_text("  회원가입");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "14", "67", "178", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("개인 정보입력");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "14", "89", "95", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("아이디");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "113", "95", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("이름");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "209", "95", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("주소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "239", "161", "95", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("휴대폰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "14", "137", "95", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("주민등록번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", "161", "95", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("이메일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "14", "185", "95", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("성별");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "239", "137", "95", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("영문이름");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "239", "113", "95", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("비밀번호확인");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "239", "89", "95", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("비밀번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "14", "233", "95", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("상세주소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "239", "185", "95", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("우편번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "170", "140", "64", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_password("true");
            obj.set_maxlength("7");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 480, 318, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("member002");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("회원가입창");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","Edit05","value","ds_insa","id");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit04","value","ds_insa","name");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit02","value","ds_insa","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit00","value","ds_insa","zip");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit01","value","ds_insa","addr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit06","value","ds_insa","password");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Edit07","value","ds_insa","eng_name");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Combo01","value","ds_insa","sex");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Edit10","value","ds_insa","addr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit03","value","ds_insa","reg_no");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","MaskEdit00","value","ds_insa","hp");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("member.xfdl", "Lib::common.xjs");
        this.registerScript("member.xfdl", function() {

        //include "Lib::common.xjs";

        
        this.member002_onload = function(obj,e)
        {
        	this.alert("회원가입 후 관리자가 승인한 후에 로그인이 가능합니다.");
        	this.setCode();
        }

        // 공통코드 세팅
        this.setCode = function()
        {
        	this.gf_codeComListLoad("ds_PosCode",  "ds_PosCode",  "Y", "", "선택", "fnCallback", "B01"); // 등급코드
        }

        // 아이디 검사
        this.Edit05_canchange = function(obj,e)
        {
        	var idValue = this.Edit05.value;
        	
        	var strParam = "id=" + idValue;
        	
        	this.gfn_transaction(this,
        						"idChecker",
        						"administrator/selectId.do",
        						"",
        						"ds_check=ds_output",
        						strParam,
        						"transaction_callback"
        						);
        }

        
        // 우편 번호 검색하기
        this.btn_execute_onclick = function(obj,e)
        {
        	this.Plugin00.callMethod("Navigate2", "http://localhost:8080/pd_shop/jsp/zipcodeSearch.jsp"); // JKIM_2020.02.17 : jsp 디렉토리로 이동
        }

        // 우편 번호 검색 후 값 받기
        this.Plugin00_TitleChange = function()
        {
        	
        	if(arguments[0] != "TITLE"){
        		var postArr = arguments[0].split("_");
        		this.Edit00.set_value(postArr[0]);
        		this.Edit01.set_value(postArr[1]);
        		
        		this.Edit10.set_enable(true);
        	}
        	
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        }

        this.Button00_onclick = function(obj,e)
        {

        	if(this.Edit05.value == null){
        		this.alert("아이디를 입력해주세요.");
        		this.Edit05.setFocus();
        		return;
        	}else if(this.Edit04.value == null){
        		this.alert("이름을 입력해주세요.");
        		this.Edit04.setFocus();
        		return;
        	}else if(this.Edit06.value == null){
        		this.alert("비밀번호를 입력해주세요.");
        		this.Edit06.setFocus();
        		return;
        	}else if(this.Edit09.value == null){
        		this.alert("비밀번호를 확인해주세요.");
        		this.Edit09.setFocus();
        		return;
        	}else if(this.Edit03.value == null){
        		this.alert("생년월일을 입력해주세요.");
        		this.Edit03.setFocus();
        		return;
        	}else if(this.Edit14.value == null){
        		this.alert("주민번호 뒷자리를 입력해주세요.");
        		this.Edit14.setFocus();
        		return;
        	}else if(this.Edit02.value == null){
        		this.alert("이메일을 입력해주세요.");
        		this.Edit02.setFocus();
        		return;
        	}else if(this.Combo01.value == null){
        		this.alert("성별을 선택하시오");
        		this.Combo01.dropdown();
        		return;
        	}else if(this.Edit00.value == null){
        		this.alert("주소를 입력하시오");
        		this.btn_execute_onclick();
        		return;
        	}else if(this.Edit10.value == null){
        		this.alert("상세주소를 입력하세요");
        		this.Edit10.setFocus();
        		return;
        	}else if(this.MaskEdit00.value == null){
        		this.alert("핸드폰번호를 입력하세요.");
        		this.MaskEdit00.setFocus();
        		return;
        	}else if(this.Edit03.getLength() < 6){
        		this.alert("생년월일을 확인해주세요.");
        		this.Edit03.setFocus();
        		return;
        	}else if(this.Edit14.getLength() < 7 ){
        		this.alert("주민번호 뒷자리를 확인해주세요.");
        		this.Edit14.setFocus();
        		return;
        	}else if(this.Edit07.value == null){
        		this.alert("영문이름을 입력해주세요");
        		this.Edit07.setFocus();
        		return;
        	}
        	
        	var reg_no = this.Edit03.value + this.Edit14.value;
        	this.ds_insa.setColumn(0,"reg_no",reg_no);
        	
        	this.gfn_transaction(this,
        						"insertAdm",
        						"administrator/insertAdm.do",
        						"ds_input=ds_insa",
        						"ds_check=ds_output",
        						"",
        						"transaction_callback"
        						);
        	
        }

        // 비밀번호 확인
        this.Edit09_onchanged = function(obj,e)
        {
        	if(this.Edit06.value != this.Edit09.value){
        		this.alert("비밀번호가 일치하지 않습니다.");
        		this.Edit09.set_value("");
        	}
        }

        
        // 트랜잭션 콜백
        this.transaction_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		this.alert("회원가입 오류입니다. 관리자에게 문의하십시오");
        		return;
        	}
        	
        	switch(sSvcId){
        		case "idChecker": 
        		var check = this.ds_check.getColumn(this.ds_check.rowposition, "msg");
        		if(check == "none"){
        			this.alert("사용이 가능한 아이디입니다.");
        		}else{
        			this.alert("이미 사용중인 아이디입니다.");
        			this.Edit05.set_value(null);
        			this.Edit05.set_text("");
        			this.Edit05.setFocus();
        		}
        		break;
        		
        		case "insertAdm":
        			this.alert("회원가입이 완료되었습니다.");
        			this.close();
        		break;
        	
        	}
        }

        // 이메일 정규식확인
        this.Edit02_canchange = function(obj,e)
        {
        	var strEmail = obj.value;
        	var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        	
        	if(strEmail.match(regExp) != null){
        		var isGood = true;
        	}else{
        		var isGood = false;
        	}
        	
        	if(isGood){
        		
        	}else{
        		this.alert("이메일 형식을 맞춰주세요");
        		this.Edit02.set_text("");
        		this.Edit02.setFocus();
        	}
        }

        // 주민등록번호 유효성 검사
        this.Edit14_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.member002_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.btn_execute.addEventHandler("onclick", this.btn_execute_onclick, this);
            this.Edit01.addEventHandler("ontextchange", this.Edit01_ontextchange, this);
            this.Edit01.addEventHandler("ontextchanged", this.Edit01_ontextchanged, this);
            this.Edit02.addEventHandler("canchange", this.Edit02_canchange, this);
            this.Edit05.addEventHandler("canchange", this.Edit05_canchange, this);
            this.Edit06.addEventHandler("onsize", this.Edit06_onsize, this);
            this.Edit10.addEventHandler("ontextchange", this.Edit01_ontextchange, this);
            this.Edit10.addEventHandler("ontextchanged", this.Edit01_ontextchanged, this);
            this.Edit09.addEventHandler("onchanged", this.Edit09_onchanged, this);
            this.Plugin00.addEventHandler("TitleChange", this.Plugin00_TitleChange, this);
            this.Edit03.addEventHandler("oneditclick", this.Edit03_oneditclick, this);
            this.Edit14.addEventHandler("oneditclick", this.Edit14_oneditclick, this);

        };

        this.loadIncludeScript("member.xfdl");

       
    };
}
)();
