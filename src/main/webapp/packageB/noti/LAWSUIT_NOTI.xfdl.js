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
                this.set_name("LAWSUIT_NOTI");
                this.set_classname("Work");
                this.set_titletext("소송고지관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_instanceType", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitNoti", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitNotiAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiInstSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDfsDeg\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDfsDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view02", "absolute", "14", "288", "996", "239", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "134", "996", "109", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  소송고지관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "21", "70", "983", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("소송고지번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_adm_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search", "absolute", "290", "71", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "942", "71", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", "111", "100", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("  소송 고지 기본사항");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "20", "140", "984", "25", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "20", "140", "115", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("고지일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "359", "140", "115", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("심급구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "164", "984", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "164", "115", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_case_no", "absolute", "140", "167", "140", "19", null, null, this);
            obj.set_taborder("13");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_case1", "absolute", "293", "165", "55", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("입력");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "359", "164", "115", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("변론차수");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dfs_deg", "absolute", "479", "167", "140", "19", null, null, this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "690", "164", "115", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("변론기일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dfs_date", "absolute", "810", "167", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_enable("true");

            obj = new Static("Static06", "absolute", "612", "165", "46", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("(차)");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "188", "984", "25", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "20", "188", "115", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("원고");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pla_name", "absolute", "140", "191", "140", "19", null, null, this);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "359", "188", "115", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("외 인원수(명)");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pla_etc_no", "absolute", "479", "191", "140", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "20", "212", "984", "25", null, null, this);
            obj.set_taborder("25");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "20", "212", "115", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("피고");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_def_name", "absolute", "140", "215", "140", "19", null, null, this);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "359", "212", "115", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("외 인원수(명)");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_name05", "absolute", "479", "215", "140", "19", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "690", "140", "115", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("계류법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "14", "264", "100", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("  소송 고지 내용");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "23", "294", "981", "226", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "20", "294", "130", "226", null, null, this);
            obj.set_taborder("35");
            obj.set_text("고지내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "612", "189", "46", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("(명)");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "612", "213", "46", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("(명)");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date", "absolute", "140", "143", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_enable("true");

            obj = new Button("btn_close", "absolute", "952", "537", "55", "23", null, null, this);
            obj.set_taborder("39");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "893", "537", "55", "23", null, null, this);
            obj.set_taborder("40");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "834", "537", "55", "23", null, null, this);
            obj.set_taborder("41");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_search_court", "absolute", "810", "143", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("black");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Combo("combo_search_instanceType", "absolute", "479", "143", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_innerdataset("@ds_instanceType");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("black");

            obj = new TextArea("text_cont", "absolute", "155", "297", "843", "220", null, null, this);
            obj.set_taborder("44");
            obj.set_wordwrap("char");
            obj.set_maxlength("3000");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "38", "142", "37", "23", null, null, this);
            obj.set_taborder("48");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "376", "141", "37", "23", null, null, this);
            obj.set_taborder("49");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "705", "142", "37", "23", null, null, this);
            obj.set_taborder("50");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static03", "absolute", "38", "166", "37", "23", null, null, this);
            obj.set_taborder("51");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static04", "absolute", "376", "166", "37", "23", null, null, this);
            obj.set_taborder("52");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static05", "absolute", "706", "165", "37", "23", null, null, this);
            obj.set_taborder("53");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static06", "absolute", "54", "190", "37", "23", null, null, this);
            obj.set_taborder("54");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static07", "absolute", "54", "214", "37", "23", null, null, this);
            obj.set_taborder("55");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  소송고지관리");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 dotum");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송고지관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item11","edt_adm_no","value","ds_lawsuitNoti","lawsuitNotiAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_case_no","value","ds_lawsuitNoti","lawsuitNotiCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_dfs_deg","value","ds_lawsuitNoti","lawsuitNotiDfsDeg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cal_dfs_date","value","ds_lawsuitNoti","lawsuitNotiDfsDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_pla_name","value","ds_lawsuitNoti","lawsuitNotiPlaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_pla_etc_no","value","ds_lawsuitNoti","lawsuitNotiPlaEtcNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_def_name","value","ds_lawsuitNoti","lawsuitNotiDefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Edit_name05","value","ds_lawsuitNoti","lawsuitNotiDefEtcNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_date","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","combo_search_court","value","ds_lawsuitNoti","lawsuitNotiCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","combo_search_instanceType","value","ds_lawsuitNoti","lawsuitNotiInstSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","text_cont","value","ds_lawsuitNoti","lawsuitNotiCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_pla_etc_no","","ds_lawsuitNoti","lawsuitNotiPlaEtcNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_NOTI.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_NOTI.xfdl", function() {
        //include "Lib::common.xjs";

        
        // 초기화면
        // 페이지 로딩시 이벤트
        this.LAWSUIT_NOTI_onload = function(obj,e){
        	// 새로운 Row 추가
        	this.ds_lawsuitNoti.addRow();
        	// 데이터셋 초기화
        	this.ds_court.clearData();
        	this.ds_instanceType.clearData();
        	
        	this.gf_codeComListLoad("dsComCode", "ds_instanceType", "Y", "", "", "", "G01"); // 심급차수코드
        	this.gf_codeComListLoad("dsComCode", "ds_court", "Y", "", "", "", "A01"); // 법원 공통 코드
        }

        // 심급에 따른 차수 셋팅
        this.setInstanceLevel = function(){
        	if(this.ds_lawsuitNoti.rowcount==0){
        		
        		for(var i=10; i>0 ; i--){
        			this.ds_instanceType.DeleteRow(i);
        		}		
        			this.Div00.combo_search_instanceType.index="0";
        }else{
        		var instanceLevel = this.ds_lawsuitNoti.rowcount-1;
        		for(var i=10; i>instanceLevel ; i--){
        			this.ds_instanceType.DeleteRow(i);
        		}		
        			this.Div00.combo_search_instanceType.index=instanceLevel;
        	}	
        }

        // 소송고지 번호 검색 팝업창
        this.btn_list_search_OnClick = function(){
        		
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_NOTI_NO.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	trace("모달전");
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	
        	// 팝업에서 가져온 값을 해당되는 위치에 대입 (단 조건값은 팝업에 위치한 배열값과 일치해야)
        	trace("vvvv");
        	if(!this.gfn_IsNull(v_rtnArr))
        		{
        		trace("vvvv22");
        	}
        		trace("vvvv22");

        	}	
        /*
        // 사건번호 검색
        this.btn_case1_OnClick = function(){
        	var v_argParm = new Array(); // 배열선언
            v_argParm[0] = '';
        	//	팝업화면 
        		
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("lawraisreqs"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::POP_CASENO_SEARCH.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	
        	// 팝업에서 가져온 값을 해당되는 위치에 대입 (단 조건값은 팝업에 위치한 배열값과 일치해야)
        	if(!this.gfn_IsNull(v_rtnArr))
        	{
        		this.getLawsuitNotiList(v_rtnArr[0]);
        	}
        }
        */
        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        trace("modal callback");
        	if(strID == "Popup1")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		
        		if(this.ds_lawsuitNoti.getRowCount > 0) {
        			this.ds_lawsuitNoti.clearData();
        		}
        		
        		trace("v: "+variant);
        		this.getLawsuitNotiList(variant);
        		trace("모달 후");

        	}

        }

        // 소송고지 내용 가져오기
        this.getLawsuitNotiList = function(variant)
        {
        	//trace("getLawsuitNotiList");
        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	this.ds_search.setColumn(0, "searchKeyword", variant);
        	var strSvcid 		= "getLawsuitNotiList";
        	var strController	= "noti/getLawsuitNotiList.do";
        	var strParam 		= "";

        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        				strSvcid,
        				strController, 
        				"ds_search=ds_search", 
        				"ds_lawsuitNoti=ds_output",
        				strParam, 
        				"fnCallBack"
        				);

        }

        this.fnCallBack = function(sSvcId,nErrorCode,sErrorMsg)
        {

        	if (nErrorCode < 0)
        	{		
        		alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	switch (sSvcId)
        	{
        		case "getLawsuitNotiList":		// 조회
        			if(nErrorCode < 0 ){
        				this.alert("소송고지 불러오기 실패하였습니다."+sErrorMsg);
        			}else if(nErrorCode == 0 ){
        				//this.alert("처리되었습니다.");
        				trace("소송고지 불러오기 성공");
        				break;
        			}
        		case "insertLawsuitNoti":		// 저장
        			var tmp = this.ds_lawsuitNoti.getColumn(0,"lawsuitNotiAdmNo");
        			//alert(tmp);
        			this.getLawsuitNotiList(tmp);
        			this.alert("저장되었습니다.");
        			break;
        			
        		case "getRaisreqDefList":
        			// trace(this.ds_def.saveXML());
        			break;
        		
        		case "insertDefAll":
        			trace(this.ds_raisreq.saveXML());
        			this.alert("저장되었습니다.");
        			break;
        		case "updateRaisreqRep":
        			this.alert("저장되었습니다.");
        			break;
        	}
        }

        
        this.btn_Clean_OnClick = function(obj,e)
        {
        	this.ds_instanceType.clearData();
        	this.ds_court.clearData();
        	this.ds_lawsuitNoti.clearData();
        	this.reload();
        }

        
        this.btn_save_OnClick = function(obj,e)
        {
        	
        	//if(this.Div00.cal_date.value='')
        	if(this.cal_date.value='')
        	{
        		this.alert("고지일자를 선택하세요.");
        		this.cal_date.setFocus();
        		this.cal_date.dropdown();
        	
        	}else if(this.combo_search_instanceType.index==-1){
        		this.alert("심급을 선택해주세요.");
        		this.combo_search_instanceType.setFocus();
        		this.combo_search_instanceType.dropdown();
        	
        	}else if(this.combo_search_court.index==-1){
        		this.alert("법원을 선택하세요.");
        		this.combo_search_court.setFocus();
        		this.combo_search_court.dropdown();
        	
        	}else if(this.edt_case_no.value=''){
        		this.alert("사건번호를 입력하세요.");
        		this.edt_case_no.setFocus();
        	
        	}else if(this.cal_dfs_date.value=''){
        		this.alert("변론기일을 선택하세요.");
        		this.cal_dfs_date.setFocus();
        	
        	}else if(this.edt_pla_name.text=''){
        		this.alert("원고명을 입력하세요.");
        		this.edt_pla_name.setFocus();
        	
        	}else if(this.edt_def_name.text=''){
        		this.alert("피고명을 입력하세요.");
        		this.edt_def_name.setFocus();
        		
        	}else if(this.text_cont.text=''){
        		this.alert("고지내용을 입력하세요.");
        		this.text_cont.setFocus();
        	
        	}else{
        		this.saveLawsuitNoti();
        	}
        }

        // 소송 고지 입력
        this.saveLawsuitNoti = function(obj)
        {
        	var strSvcid = "insertLawsuitNoti";
        	var strController = "noti/insertLawsuitNoti.do";
        	var strParam = "";
        	
        		// 소송고지 등록 transaction
        	this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_lawsuitNoti:U"
        					,"ds_lawsuitNoti=ds_output"
        					,strParam,
        					"fnCallBack");

        }

        // 소송 고지 등록시 reload
        this.getLawsuitNotiInsert = function()
        {
        	var strSvcid = "getLawsuitNotiInsert";
        	var strController = "noti/getLawsuitNotiInsert.do";
        	var strParam = "";
        	
        	this.gfn_transaction(this
        				,strSvcid
        				,strController
        				,"ds_input=ds_lawsuitNoti:U"
        				,""
        				,strParam,
        				"fnCallBack");
        }

        this.btn_delete_OnClick = function(obj,e)
        {
        this.edt_ad
        	//if(this.div_search.edt_adm_no.value != "")
        	if(this.edt_adm_no.value != "")
        	{
        		var deleteYN = this.confirm("정말 삭제 하시겠습니까?");
        		if(deleteYN == 1)
        		{
        			// 삭제 실패시를 위해 전역변수(noti_no)에 소송고지 버놓를 넣어준다.
        			var noti_no = this.ds_lawsuitNoti.getColumn(this.ds_lawsuitNoti.rowposition, "lawsuitNotiAdmNo");
        			
        			this.getLawsuitNotiList(noti_no); // 소송관리번호 검색
        			
        			if(this.ds_lawsuitNoti.getColumn(this.ds_lawsuitNoti.rowposition, "lawsuitNotiAdmNo") != null)
        			{
        				this.alert("소송관리에 등록된 소송고지번호를 먼저 삭제해야 합니다.");
        				
        				this.getLawsuitNotiList(noti_no);
        				this.noti_no = "";
        			}else{
        				this.getLawsuitNotiList(noti_no);
        				
        				this.ds_lawsuitNoti.deleteRow(this.ds_lawsuitNoti.rowposition);
        				
        				this.saveLawsuitNoti(); // 삭제
        			}
        			
        			// 삭제 성공시 초기화
        			if(this.noti_no != "")
        			{
        				btn_Clean_OnClick();
        				alert("삭제 되었습니다.");
        			}
        		}
        	}else{
        		this.alert("삭제할 소송고지 관리 번호를 검색하세요.");
        	}
        }

        

        
        // 사건번호
        this.Div00_btn_case1_onclick = function(obj,e)
        {
        	var v_argParm = new Array(); // 배열선언
            v_argParm[0] = '';
        	//	팝업화면 
        		
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	
        	 var newChild = new ChildFrame;
        	newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::POP_CASENO_SEARCH.xfdl");

        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback2");
        }

        this.modal_callback2 = function(strID,Text)
        {

        	if(strID == "Popup1")
        	{
        		if(this.gfn_IsNull(Text))
        		{
        			return;
        		}
        		
        	}
        this.edt_case_no.set_value(Text);
        	//this.edt_case_no.value = Text;
        }

        

        

        
        this.btn_close_OnClick = function(obj,e)
        {
        	this.close();
        }

        this.Static01_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_NOTI_onload, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_list_search.addEventHandler("onclick", this.btn_list_search_OnClick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_Clean_OnClick, this);
            this.Static18.addEventHandler("onclick", this.Static18_onclick, this);
            this.btn_case1.addEventHandler("onclick", this.Div00_btn_case1_onclick, this);
            this.Static19.addEventHandler("onclick", this.Static18_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_OnClick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_OnClick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_OnClick, this);

        };

        this.loadIncludeScript("LAWSUIT_NOTI.xfdl");

       
    };
}
)();
