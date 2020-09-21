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
                this.set_name("deposit_re");
                this.set_titletext("공탁관리");
                this._setFormPosition(0,0,1024,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_depo", this);
            obj._setContents("<ColumnInfo><Column id=\"depositDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositJuriCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositForcExecSeq\" type=\"STRING\" size=\"256\"/><Column id=\"depositOthDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepuName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositKeepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoReleDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepchgCollDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollRea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"depositDepoAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_depoMgr", this);
            obj._setContents("<ColumnInfo><Column id=\"depositmgrDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrSeq\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrAsigDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sawon", this);
            obj._setContents("<ColumnInfo><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  공탁관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "72", "996", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "289", "73", "55", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_lawsuitAdmNo", "absolute", "146", "74", "141", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "72", "130", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("  공탁관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", "157", "996", "25", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "678", "157", "130", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("  피공탁자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "346", "157", "130", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("  강제집행일련번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_prgrCode", "absolute", "146", "159", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");

            obj = new Static("Static05", "absolute", "14", "157", "130", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("  관할법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", "122", "100", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("공탁사항등록");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "14", "182", "996", "25", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "678", "182", "130", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("  공탁금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "346", "182", "130", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("  대리인명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "14", "182", "130", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("  공탁자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", "207", "996", "25", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "346", "207", "130", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("  공탁일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_depoDept", "absolute", "146", "209", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");

            obj = new Static("Static14", "absolute", "14", "207", "130", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("  보관부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_depuName", "absolute", "478", "184", "141", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button_search01", "absolute", "621", "183", "55", "23", null, null, this);
            obj.set_taborder("28");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_forcExecSeq", "absolute", "478", "159", "198", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_othDepoName", "absolute", "810", "159", "198", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_depoName", "absolute", "146", "184", "198", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_depoChg", "absolute", "810", "184", "198", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_depoDate", "absolute", "478", "209", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");

            obj = new Static("Static12", "absolute", "14", "257", "100", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("공탁담당자");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", "292", "996", "25", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "14", "292", "130", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("  공탁담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "346", "292", "130", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("  배정일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_search02", "absolute", "289", "293", "55", "23", null, null, this);
            obj.set_taborder("40");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "678", "292", "130", "25", null, null, this);
            obj.set_taborder("41");
            obj.set_text("  담당자부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_asigDate", "absolute", "478", "294", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");

            obj = new Static("Static19", "absolute", "14", "342", "100", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("공탁서불출");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "14", "377", "996", "25", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "14", "377", "130", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("  공탁불출일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_releDate", "absolute", "146", "379", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");

            obj = new Static("Static22", "absolute", "14", "427", "100", "25", null, null, this);
            obj.set_taborder("48");
            obj.set_text("공탁금회수");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "14", "462", "996", "25", null, null, this);
            obj.set_taborder("49");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "14", "462", "130", "25", null, null, this);
            obj.set_taborder("50");
            obj.set_text("  공탁금회수일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_collDate", "absolute", "146", "464", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");

            obj = new Static("Static25", "absolute", "14", "487", "996", "75", null, null, this);
            obj.set_taborder("52");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "346", "462", "130", "25", null, null, this);
            obj.set_taborder("53");
            obj.set_text("  공탁회수금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "14", "487", "130", "75", null, null, this);
            obj.set_taborder("54");
            obj.set_text("  공탁회수사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_collChg", "absolute", "478", "464", "198", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button_save", "absolute", "895", "572", "55", "23", null, null, this);
            obj.set_taborder("57");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "955", "572", "55", "23", null, null, this);
            obj.set_taborder("58");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_deptCode", "absolute", "810", "294", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");

            obj = new Combo("Combo_name", "absolute", "146", "294", "141", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("@ds_sawon");
            obj.set_codecolumn("insaSabun");
            obj.set_datacolumn("insaName");
            obj.set_enable("false");

            obj = new TextArea("TextArea00", "absolute", "146", "489", "862", "71", null, null, this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  공탁관리");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("deposit_re");
            		p.set_titletext("공탁관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Combo_prgrCode","value","ds_depo","depositJuriCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edit_forcExecSeq","value","ds_depo","depositForcExecSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edit_othDepoName","value","ds_depo","depositOthDepoName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edit_depoName","value","ds_depo","depositDepoName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edit_depuName","value","ds_depo","depositDepuName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edit_depoChg","value","ds_depo","depositDepoChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Combo_depoDept","value","ds_depo","depositKeepDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Calendar_depoDate","value","ds_depo","depositDepoDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Calendar_asigDate","value","ds_depoMgr","depositmgrAsigDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Combo_deptCode","value","ds_depoMgr","depositmgrDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Calendar_releDate","value","ds_depo","depositDepoReleDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Calendar_collDate","value","ds_depo","depositDepchgCollDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edit_collChg","value","ds_depo","depositDepoCollChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Combo_name","value","ds_depoMgr","depositmgrId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edit_lawsuitAdmNo","value","ds_search","depositDepoAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","TextArea00","value","ds_depo","depositDepoCollRea");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("deposit_re_ws.xfdl", "Lib::common.xjs");
        this.registerScript("deposit_re_ws.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        
        this.deposit_re_onload = function(obj,e)
        {
        	this.setCode();
        }

        //코드 호출 함수
        this.setCode = function()
        {
        	this.gf_codeComListLoad("ds_dept",  "ds_dept",   "N", "", "", "fn_Callback", "B01"); // 당사원피고코드
        	this.gf_codeComListLoad("ds_court",  "ds_court",   "N", "", "", "fn_Callback", "A01");// 수행법원코드
        	this.ds_sawonSearch();
        }

        this.Button_numSearch_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("admSearch"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "depo::pop_depo.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        this.Button_search01_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("depuNameSearch"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "depo::pop_char.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        this.Button_search02_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("nameSearch"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "depo::pop_char.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        this.modal_callback = function(strID,variable)
        {
        	if(strID == "admSearch"){
        		this.ds_search.setColumn(0, "depositDepoAdmNo", variable);
        		this.getDepositInfo();
        	}
        	else if(strID == "nameSearch"){
        		var strArr = variable.split("|");
        		this.Combo_name.set_value(strArr[2]);
        		this.ds_depoMgr.setColumn(this.ds_depoMgr.rowposition, "depositmgrId", this.Combo_name.value);
        	}
        	else if(strID == "depuNameSearch"){
        		var strArr = variable.split("|");
        		this.edit_depuName.set_value(strArr[0]);
        		this.ds_depo.setColumn(this.ds_depo.rowposition, "depositDepuName", this.edit_depuName.value)
        	}
        }

        this.getDepositInfo = function()
        {
        	trace("======================deposit조회======================");
        	this.gfn_transaction(this,
        			  "getDepositInfo",
        			  "depo/getDepositList.do",
        			  "ds_search=ds_search",
        			  "ds_depo=ds_depo",
        			  "",
        			  "fn_callback");
        }

        this.getDepositMgrInfo = function()
        {
        	trace("======================depositMgr조회======================");
        	this.gfn_transaction(this,
        			  "getDepositMgrInfo",
        			  "depo/getDepositMgrList.do",
        			  "ds_search=ds_search",
        			  "ds_depoMgr=ds_depoMgr",
        			  "",
        			  "fn_callback");
        }

        this.updateDeposit = function()
        {
        	trace("======================deposit업데이트======================");
        	this.gfn_transaction(this,
        		"updateDeposit",
        		"depo/updateDeposit.do",
        		"ds_depo=ds_depo",
        		"",
        		"",
        		"fn_callback"
        		);
        }

        this.updateDepositMgr = function()
        {
        	trace("======================depositMgr업데이트======================");
        	this.gfn_transaction(this,
        		"updateDepositMgr",
        		"depo/updateDepositMgr.do",
        		"ds_depoMgr=ds_depoMgr",
        		"",
        		"",
        		"fn_callback"
        		);
        }

        this.ds_sawonSearch = function()
        {
        	this.gfn_transaction(this,
        					"selectCharList",
        					"depo/Depo/selectCharList.do",
        					"",
        					"ds_sawon=ds_output",
        					"",
        					"fn_callback"
        					);
        }

        this.fn_callback = function(svcId,errCd,errMsg)
        {
        	if(svcId == "getDepositInfo")
        	{
        		this.getDepositMgrInfo();
        	}
        	if(svcId == "updateDeposit")
        	{
        		this.updateDepositMgr();
        	}

        }

        this.Button_save_onclick = function(obj,e)
        {
        	var saveConfirm = application.confirm("해당 데이터를 저장 하시겠습니까?", "확인");
        	
        	if(saveConfirm){
        		this.updateDeposit();
        	}
        }

        this.Button_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.deposit_re_onload, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Button_search01.addEventHandler("onclick", this.Button_search01_onclick, this);
            this.Button_search02.addEventHandler("onclick", this.Button_search02_onclick, this);
            this.Button_save.addEventHandler("onclick", this.Button_save_onclick, this);
            this.Button_close.addEventHandler("onclick", this.Button_close_onclick, this);

        };

        this.loadIncludeScript("deposit_re_ws.xfdl");

       
    };
}
)();
