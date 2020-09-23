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
                this.set_name("PD_IN_COM_MM001");
                this.set_titletext("  공통코드마스터관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_masterCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classLen\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainTable\" type=\"STRING\" size=\"256\"/><Column id=\"mainColumn\" type=\"STRING\" size=\"256\"/><Column id=\"classDesc\" type=\"STRING\" size=\"256\"/><Column id=\"registTime\" type=\"STRING\" size=\"256\"/><Column id=\"registId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detailCode", this);
            obj._setContents("<ColumnInfo><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"id\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img00", "absolute", "14", "137", "996", "275", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_plaintiff", "absolute", "20", "144", "984", "262", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_masterCodeList");
            obj.set_scrollbars("autovert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_enable("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"170\"/><Column size=\"190\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 9 dotum;\" text=\"NO\"/><Cell col=\"1\" style=\"font:bold 9 dotum;\" text=\"분류코드\"/><Cell col=\"2\" style=\"font:bold 9 dotum;\" text=\"분류명칭\"/><Cell col=\"3\" style=\"font:bold 9 dotum;\" text=\"사용여부\"/><Cell col=\"4\" style=\"font:bold 9 dotum;\" text=\"주사용테이블\"/><Cell col=\"5\" style=\"font:bold 9 dotum;\" text=\"사용컬럼명칭\"/><Cell col=\"6\" style=\"font:bold 9 dotum;\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:rownum\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:classCode\" editlimit=\"30\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center;\" text=\"bind:className\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:useYn\" combodataset=\"ds_useYn\" combocodecol=\"id\" combodatacol=\"value\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:mainTable\" editlimit=\"11\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center;\" text=\"bind:mainColumn\" editlimit=\"11\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:registTime\" editlimit=\"11\" calendardisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img02", "absolute", "14", "463", "996", "60", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "60", "492", "944", "25", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "60", "468", "944", "25", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_text("공통코드마스터관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "60", "70", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_text("분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "398", "71", "55", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "949", "71", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "468", "105", "25", null, null, this);
            obj.set_text("분류코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "20", "492", "105", "25", null, null, this);
            obj.set_text("주사용테이블");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "267", "468", "105", "25", null, null, this);
            obj.set_text("분류명칭");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "267", "492", "105", "25", null, null, this);
            obj.set_text("사용컬럼명칭");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "512", "468", "105", "25", null, null, this);
            obj.set_text("분류코드길이");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "512", "492", "105", "25", null, null, this);
            obj.set_text("분류코드설명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32", "absolute", "756", "468", "105", "25", null, null, this);
            obj.set_text("사용여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "377", "471", "130", "19", null, null, this);
            obj.set_taborder("0");
            obj.set_maxlength("30");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "622", "471", "130", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("true");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "622", "495", "130", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aprv", "absolute", "894", "421", "55", "23", null, null, this);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "954", "421", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit00", "absolute", "130", "471", "130", "19", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("3");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "130", "495", "130", "19", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("20");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "377", "495", "130", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("30");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "130", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CLASS_CODE</Col><Col id=\"datacolumn\">분류코드</Col></Row><Row><Col id=\"codecolumn\">CLASS_NAME</Col><Col id=\"datacolumn\">분류명칭</Col></Row><Row><Col id=\"codecolumn\">useYn</Col><Col id=\"datacolumn\">사용여부</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("전체");
            obj.set_index("-1");

            obj = new Combo("Combo02", "absolute", "866", "471", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            var Combo02_innerdataset = new Dataset("Combo02_innerdataset", this.Combo02);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Combo("Combo01", "absolute", "264", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_detailCode");
            obj.set_codecolumn("detailCode");
            obj.set_datacolumn("detailCode");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Static("Static01", "absolute", "282", "469", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "23", "493", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "771", "469", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "270", "494", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "514", "493", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "834", "421", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "35", "469", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "203", "423", "573", "18", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("28");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("32");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "17", "120", "82", "13", null, null, this);
            obj.set_taborder("11");
            obj.set_text("코드목록");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none white");
            obj.style.set_color("#46463dff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PD_IN_COM_MM001");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("  공통코드마스터관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","Edit01","value","ds_masterCodeList","className");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Edit02","value","ds_masterCodeList","classLen");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Edit05","value","ds_masterCodeList","classDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edit00","value","ds_masterCodeList","classCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit03","value","ds_masterCodeList","mainTable");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit04","value","ds_masterCodeList","mainColumn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Combo02","value","ds_masterCodeList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PD_IN_COM_MM001.xfdl", "Lib::common.xjs");
        this.registerScript("PD_IN_COM_MM001.xfdl", function() {
        //include "Lib::common.xjs";

        this.confirmStr = "";
        var pageNum = "";
        var rowNum = "";
        var strSwitch = "";

        
        this.PD_IN_COM_MM001_onload = function(obj,e)
        {
        	this.btn_search_onclick();
        }

        // 조회 버튼
        this.btn_search_onclick = function(obj,e)

        {	

        	//소송관리번호조회 버튼 클릭시 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        	this.enable_nonEdit();
        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	var searchCondition = this.Combo00.value;
        	var searchKeyword = this.Combo01.value;
        	
        	if(this.Combo01.value == "사용"){
        		searchKeyword = "Y";
        	}else if(this.Combo01.value == "미사용"){
        		searchKeyword = "N";
        	}
        	
        	this.ds_search.setColumn(0, "searchCondition", searchCondition);
        	this.ds_search.setColumn(0, "searchKeyword", searchKeyword);

        	this.gfn_transaction(this,
        						"selectCode",
        						"common/selectCode.do",
        						"ds_search=ds_search",
        						"ds_masterCodeList=ds_output",
        						"",
        						"transaction_callback"
        						);
        }

        // 초기화 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	this.reload();
        }

        // 신규버튼
        this.btn_aprv_onclick = function(obj,e)
        {
        	this.ds_masterCodeList.addRow();
        	
        	var id = application.gds_User.getColumn(application.gds_User.rowposition, "id");
        	if(id == null) {
        		id = "ID";
        	}
        	this.ds_masterCodeList.setColumn(this.ds_masterCodeList.rowposition, "registId", id);
        	
        	this.edit00.set_enable("true");
        	this.enable_edit();
        	
        	//this.btn_mody00.set_visible("false");
        	//this.btn_mody01.set_visible("true");
        }

        // 편집창 활성화
        this.enable_edit = function()
        {
        	this.Edit01.set_enable("true");
        	this.Edit02.set_enable("true");
        	this.Combo02.set_enable("true");
        	this.Edit03.set_enable("true");
        	this.Edit04.set_enable("true");
        	this.Edit05.set_enable("true");
        	this.edit00.setFocus();
        }

        // 편집창 비활성화
        this.enable_nonEdit = function()
        {
        	this.edit00.set_enable("false");
        	this.Edit01.set_enable("true");
        	this.Edit02.set_enable("true");
        	this.Combo02.set_enable("true");
        	this.Edit03.set_enable("false");
        	this.Edit04.set_enable("true");
        	this.Edit05.set_enable("true");
        }

        // 수정활성화버튼
        // this.btn_mody00_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	this.enable_edit();
        // 	obj.set_visible("false");
        // 	this.btn_mody01.set_visible("true");
        // }

        
        // 수정비활성화버튼
        // this.btn_mody01_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	this.enable_nonEdit();
        // 	obj.set_visible("false");
        // 	this.btn_mody00.set_visible("true");
        // }

        
        // 저장버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.Combo02.index == -1){
        		this.alert("사용여부를 확인해주세요.");
        		this.Combo02.dropdown();
        		return;
        	}else if(this.edit00.value == null || this.edit00.getLength() != 3){
        		this.alert("분류코드를 확인해주세요.");
        		this.edit00.setFocus();
        		return;
        	}else if(this.Edit01.value == null){
        		this.alert("분류명칭을 입력해주세요.");
        		this.Edit01.setFocus();
        		return;
        	}else if(this.Edit02.value == null){
        		this.alert("분류코드길이를 입력해주세요.");
        		this.Edit02.setFocus();
        		return;
        	}else if(this.Edit03.value == null){
        		this.alert("주사용테이블을 입력해주세요.");
        		this.Edit03.setFocus();
        		return;
        	}else if(this.Edit04.value == null){
        		this.alert("사용컬럼명칭을 입력해주세요.");
        		this.Edit04.setFocus();
        		return;
        	}else if(this.Edit05.value == null){
        		this.alert("분류코드설명을 입력해주세요.");
        		this.Edit05.setFocus();
        		return;
        	}
        		
        	var confirmStr = this.confirm("저장하시겠습니까?");
        	
        	if(confirmStr){
        		this.code_transaction("saveCode");
        	}
        }

        
        // 코드 정보 저장/수정/삭제 시 트랜잭션
        this.code_transaction = function(sSvcid)
        {
        	
        	var strSvcid = sSvcid;
        	var strController = "common/editCode.do";
        	
        	rowNum = this.ds_masterCodeList.rowposition;
        	
        	this.gfn_transaction(this,
        						strSvcid,
        						strController,
        						"ds_input=ds_masterCodeList:U",
        						"",
        						"",
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
        	
        	switch(sSvcId){
        		case "selectCode":
        			var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        			this.ds_masterCodeList.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        			
        				if (this.ds_masterCodeList.getRowCount() == 0)
        				{
        					this.ds_masterCodeList.filter("");
        					this.div_page.visible = false;
        					this.alert("조회할 자료가 없습니다.");
        					return;
        				}
        				else
        				{
        					this.div_page.visible = true;
        					this.fv_iServerRowCount = this.ds_masterCodeList.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("gray");
        				}
        				
        			if(strSwitch != "수정"){
        				pageNum = 1;
        				rowNum = 0;
        			}else{
        				strSwitch = "조회";
        			}
        			
        			//this.btn_mody00.set_visible("true");
        			//this.btn_mody01.set_visible("false");
        			this.enable_nonEdit();
        			this.pageSelect(pageNum);
        			this.grd_plaintiff.selectCell(rowNum);
        			//this.alert("조회완료");
        			break;
        	
        		case "saveCode":
        			if(this.confirmStr == "저장"){
        				this.btn_clear_onclick();
        				this.alert("저장완료");
        			}else if(this.confirmStr == "수정"){
        				strSwitch = "수정";
        				this.btn_search_onclick();
        				this.alert("수정완료");
        			}
        			
        			break;
        		
        		case "deleteCode":
        			this.alert("삭제완료");
        			break;
        	}
        	
        }

        // 삭제 버튼
        this.btn_del_onclick = function(obj,e)
        {
        	var confirmStr = this.confirm("삭제하시겠습니까?");
        	
        	if(confirmStr){
        		this.ds_masterCodeList.deleteRow(this.ds_masterCodeList.rowposition);
        		this.code_transaction("deleteCode");
        	}
        }

        // 공통 분류 설정 시 값 가져오기
        this.Combo00_onitemchanged = function(obj,e)
        {
        	
        	if(e.postindex == 0 || e.postindex == 1){
        		this.ds_detailCode.clearData();
        		this.ds_detailCode.addRow();
        	}else if(e.postindex == 2){
        		this.ds_detailCode.clearData();
        		this.ds_detailCode.addRow();
        		this.ds_detailCode.setColumn(this.ds_detailCode.rowposition, "detailCode", "사용");
        		this.ds_detailCode.addRow();
        		this.ds_detailCode.setColumn(this.ds_detailCode.rowposition, "detailCode", "미사용");
        		return;
        		
        	}
        	var comboValue = e.postvalue;
        		
        	var strParam = "codeSwitch=" + comboValue;
        		
        	this.gfn_transaction(this,
        						"detailCode",
        						"common/detailCode.do",
        						"",
        						"ds_detailCode=ds_output",
        						strParam,
        						"transaction_callback"
        						);

        }

        

        ///////////////////// 페이징 처리

        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);

        	pageNum = iNo;
        	
        	this.pageSelect(iNo);
        }

        // 페이지 액션
        this.pageSelect = function(page)
        {
        	var iFirstNum = (page-1) * this.fv_iMaxPageNum + 1;

        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;

        	this.fn_SetStyle();
        	this.div_page.components["stc_No"+(page-1)].style.set_color("gray");
        	this.ds_masterCodeList.filter("");
        	
        	this.ds_masterCodeList.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("selectCode", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("selectCode", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function()
        {
        	var sPage = this.fv_iStartPageNo * this.fv_iMaxPageNum;
        	
        	// 이전버튼 처리
        	if (this.fv_iStartPageNo < 1)
        	{
        		this.div_page.stc_Prev.set_visible(false);
        	} 
        	else 
        	{
        		this.div_page.stc_Prev.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if (this.fv_iServerRowCount < this.fv_iUnitSelRowNo)
        	{
        		this.div_page.stc_Next.set_visible(false);
        	}
        	else
        	{
        		this.div_page.stc_Next.set_visible(true);
        	}

        	// 인덱스 번호 처리
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].set_visible(true);
        		this.div_page.components["stc_No"+i].set_text(sPage+i+1);

        		if (this.fv_iServerRowCount < (i * this.fv_iMaxPageNum))
        		{
        			this.div_page.components["stc_No"+i].set_visible(false);			
        		} 
        		else 
        		{
        			this.div_page.components["stc_No"+i].set_visible(true);			
        		}
        	}	
        }
        //-------------------------------------------------------------------------------------------------
        // Style조정
        //-------------------------------------------------------------------------------------------------
        this.fn_SetStyle = function()
        {
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].style.set_color("black");			
        	}	

        
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PD_IN_COM_MM001_onload, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.sta_15.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_17.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_18.addEventHandler("onclick", this.sta_18_onclick, this);
            this.sta_32.addEventHandler("onclick", this.sta_32_onclick, this);
            this.btn_aprv.addEventHandler("onclick", this.btn_aprv_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.div_page.stc_Prev.addEventHandler("onclick", this.div_page_stc_Prev_onclick, this);
            this.div_page.stc_Next.addEventHandler("onclick", this.div_page_stc_Next_onclick, this);
            this.div_page.stc_No0.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No1.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No2.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No3.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No4.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No5.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No6.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No7.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No8.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No9.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.sta_12.addEventHandler("onclick", this.sta_12_onclick, this);

        };

        this.loadIncludeScript("PD_IN_COM_MM001.xfdl");

       
    };
}
)();
