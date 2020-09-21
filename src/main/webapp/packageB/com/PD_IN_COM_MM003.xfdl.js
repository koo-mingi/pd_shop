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
                this.set_name("PD_IN_COM_MM003");
                this.set_classname("PD_IN_COM_MM003");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmmCode", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainTable\" type=\"STRING\" size=\"256\"/><Column id=\"classDesc\" type=\"STRING\" size=\"256\"/><Column id=\"registTime\" type=\"STRING\" size=\"256\"/><Column id=\"registName\" type=\"STRING\" size=\"256\"/><Column id=\"updateTime\" type=\"STRING\" size=\"256\"/><Column id=\"updateName\" type=\"STRING\" size=\"256\"/><Column id=\"parentCode\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeq\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"codeFullName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_parentCode", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeFullName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectCode", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"codeFullName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"id\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img02", "absolute", "14", "433", "996", "110", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_02", "absolute", "55", "440", "950", "25", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_00", "absolute", "55", "464", "950", "25", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_03", "absolute", "55", "488", "950", "25", null, null, this);
            obj.set_taborder("48");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_04", "absolute", "55", "512", "950", "25", null, null, this);
            obj.set_taborder("49");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("공통상세관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("분류코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "949", "71", "55", "23", null, null, this);
            obj.set_taborder("12");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", null, "400", "52", "24", "13", null, this);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "440", "115", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("분류코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "351", "440", "115", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상세코드명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "471", "443", "140", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "8", "103", "197", "19", null, null, this);
            obj.set_taborder("17");
            obj.set_text("공통코드상세리스트");
            obj.style.set_color("#46463dff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_plaintiff", "absolute", "14", "120", "996", "266", null, null, this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_cmmCode");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"115\"/><Column size=\"106\"/><Column size=\"66\"/><Column size=\"497\"/><Column size=\"83\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 9 dotum;\" text=\"NO\"/><Cell col=\"1\" style=\"font:bold 9 dotum;\" text=\"분류코드\"/><Cell col=\"2\" style=\"font:bold 9 dotum;\" text=\"상세코드명\"/><Cell col=\"3\" style=\"font:bold 9 dotum;\" text=\"사용여부\" combodataset=\"ds_useYn\" combocodecol=\"id\" combodatacol=\"value\"/><Cell col=\"4\" style=\"font:bold 9 dotum;\" text=\"코드전개\"/><Cell col=\"5\" style=\"font:bold 9 dotum;\" text=\"LEVEL\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:rownum\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:classCode\" editlimit=\"30\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left;\" text=\"bind:className\" editlimit=\"11\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:useYn\" editlimit=\"11\" combodataset=\"ds_useYn\" combocodecol=\"id\" combodatacol=\"value\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:codeFullName\"/><Cell col=\"5\" text=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new", "absolute", null, "400", "55", "24", "126", null, this);
            obj.set_taborder("19");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "400", "55", "24", "68", null, this);
            obj.set_taborder("20");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "802", "443", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_parentCode");
            obj.set_codecolumn("classCode");
            obj.set_datacolumn("codeFullName");
            obj.set_enable("false");

            obj = new Static("sta_no01", "absolute", "351", "70", "115", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("상세코드명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "351", "464", "115", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("상세코드설명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "20", "488", "115", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("  사용여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "682", "488", "115", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("등록일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "20", "512", "115", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("수정일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "471", "467", "140", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "141", "491", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("6");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");

            obj = new Edit("Edit06", "absolute", "471", "73", "140", "19", null, null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit12", "absolute", "802", "491", "140", "19", null, null, this);
            obj.set_taborder("27");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_enable("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "141", "515", "140", "19", null, null, this);
            obj.set_taborder("28");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_enable("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "141", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("@ds_selectCode");
            obj.set_codecolumn("classCode");
            obj.set_datacolumn("codeFullName");

            obj = new Static("Static02", "absolute", "38", "447", "18", "22", null, null, this);
            obj.set_taborder("30");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "40", "519", "18", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "447", "18", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mody00", "absolute", null, "400", "84", "24", "242", null, this);
            obj.set_taborder("33");
            obj.set_text("수정활성화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            obj.style.set_shadow("outer 0,0 0 gray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mody01", "absolute", null, "400", "84", "24", "242", null, this);
            obj.set_taborder("34");
            obj.set_text("수정비활성화");
            obj.set_visible("false");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "187", "391", "573", "18", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("49");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("50");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("51");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("52");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("53");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("54");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("55");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("56");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("57");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("58");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("59");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-2", "29", "27", null, null, this.div_page);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "471", "491", "140", "19", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "351", "488", "115", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("소팅순서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "682", "440", "115", "25", null, null, this);
            obj.set_taborder("37");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            obj.set_text("부모코드명");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "141", "443", "140", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("3");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "682", "512", "115", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("마지막 수정자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "802", "515", "140", "19", null, null, this);
            obj.set_taborder("39");
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "351", "511", "115", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("최초 등록자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "471", "515", "140", "19", null, null, this);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "20", "464", "115", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("메인테이블");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "141", "467", "140", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("25");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "400", "55", "24", "184", null, this);
            obj.set_taborder("43");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PD_IN_COM_MM003");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item12","Edit11","value","ds_cmmCode","sortSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit02","value","ds_cmmCode","className");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","grd_plaintiff","binddataset","ds_cmmdetail","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","grd_plaintiff","visible","ds_useryn","id");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Combo02","value","ds_cmmCode","parentCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit08","value","ds_cmmCode","classDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Combo01","value","ds_cmmCode","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit12","value","ds_cmmCode","registTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","MaskEdit00","value","ds_cmmCode","updateTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit01","value","ds_cmmCode","classCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit00","value","ds_cmmCode","updateName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit03","value","ds_cmmCode","registName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit04","value","ds_cmmCode","mainTable");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PD_IN_COM_MM003.xfdl", "Lib::common.xjs");
        this.registerScript("PD_IN_COM_MM003.xfdl", function() {

        //include "Lib::common.xjs";

        this.confirmStr = "";
        var pageNum = "";
        var rowNum = "";
        var strSwitch = "";

        this.PD_IN_COM_MM003_onload = function(obj,e)
        {
        	this.enable_nonEdit();
        	this.formOnloadControllerCall("select");
        }

        // 서버 컨트롤러 호출(분류코드, 부모코드 조회)
        this.formOnloadControllerCall = function(command)
        {
        	var inputDs;
        	
        	if(command == "select"){
        		this.ds_selectCode.clearData();
        		this.ds_selectCode.addRow();
        		inputDs = "ds_selectCode=ds_output";
        	}else if(command == "parent"){
        		this.ds_parentCode.clearData();
        		this.ds_parentCode.addRow();
        		inputDs = "ds_parentCode=ds_output";
        	}
        		
        	var strParam = "strParam=" + command;
        	
        	this.gfn_transaction(this,
        						command,
        						"cmmCode/formOnload.do",
        						"",
        						inputDs,
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
        	
        	switch(sSvcId){
        		case "select":
        			this.formOnloadControllerCall("parent");
        			break;
        		
        		case "detailList":
        			var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        			this.ds_cmmCode.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        			
        				if (this.ds_cmmCode.getRowCount() == 0)
        				{
        					this.ds_cmmCode.filter("");
        					this.div_page.set_visible("false");
        					this.alert("조회할 자료가 없습니다.");
        					return;
        				}
        				else
        				{
        					this.div_page.set_visible("true");
        					this.fv_iServerRowCount = this.ds_cmmCode.getRowCount();
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
        			
        			this.enable_nonEdit();
        			this.btn_mody00.set_visible("true");
        			this.btn_mody01.set_visible("false");
        			this.pageSelect(pageNum);
        			this.grd_plaintiff.selectCell(rowNum);
        			//this.alert("조회완료");
        			break;
        			
        		case "saveCode":
        			if(this.confirmStr == "저장"){
        				this.Combo00_onitemchanged();
        				this.alert("저장완료");
        			}else if(this.confirmStr == "수정"){
        				strSwitch = "수정";
        				this.Combo00_onitemchanged();
        			}
        			break;
        			
        		case "deleteCode":
        			this.formOnloadControllerCall("select");
        			this.formOnloadControllerCall("parent");
        			this.alert("삭제완료");
        			break;
        	}

        }

        // 검색 버튼
        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	this.Combo00_onitemchanged();
        }

        // 분류코드 선택 시 자동 조회
        this.Combo00_onitemchanged = function(obj,e)
        {
        	
        	//소송관리번호조회 버튼 클릭시 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	
        	this.ds_cmmCode.clearData();
        	this.ds_cmmCode.addRow();
        	
        	var masterCode;
        	
        	if(this.Combo00.value == ' '){
        		masterCode = null;
        	}else{
        		masterCode = this.Combo00.value;
        	}
        	
        	var detailCode = this.Edit06.value;

        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	this.btn_mody00.set_visible("true");
        	this.btn_mody01.set_visible("false");
        	this.enable_nonEdit();
        	
        	this.ds_search.setColumn(0, "searchCondition", masterCode);
        	this.ds_search.setColumn(0, "searchKeyword", detailCode);
        	
        	this.PD_IN_COM_MM003_onload();
        	
        	this.gfn_transaction(this,
        						"detailList",
        						"cmmCode/selectCodeList.do",
        						"ds_search=ds_search",
        						"ds_cmmCode=ds_output",
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

        // 편집창 활성화
        this.enable_edit = function()
        {
        	this.Edit02.set_enable("true");
        	this.Edit04.set_enable("true");
        	this.Edit08.set_enable("true");
        	this.Combo01.set_enable("true");
        	this.Edit11.set_enable("true");
        	this.Edit02.setFocus();
        }

        // 편집창 비활성화
        this.enable_nonEdit = function()
        {
        	this.Edit01.set_enable("false");
        	this.Edit04.set_enable("false");
        	this.Edit02.set_enable("false");
        	this.Edit08.set_enable("false");
        	this.Combo02.set_enable("false");
        	this.Combo01.set_enable("false");
        	this.Edit11.set_enable("false");
        }

        
        // 수정 활성화 버튼
        this.btn_mody00_onclick = function(obj,e)
        {
        	this.enable_edit();
        	obj.set_visible("false");
        	this.btn_mody01.set_visible("true");
        }

        // 수정 비활성화 버튼
        this.btn_mody01_onclick = function(obj,e)
        {
        	this.enable_nonEdit();
        	obj.set_visible("false");
        	this.btn_mody00.set_visible("true");
        }

        // 신규 버튼 클릭
        this.btn_new_onclick = function(obj,e)
        {
        	var masterCodeValue = this.Combo00.value;
        	
        	this.ds_cmmCode.addRow();

        	var id = application.gds_User.getColumn(application.gds_User.rowposition, "id");
        	this.ds_cmmCode.setColumn(this.ds_cmmCode.rowposition, "registName", id);
        	
        	this.enable_edit();
        	this.Edit01.set_enable("true");
        	this.Combo02.set_enable("true");
        	this.Combo02.set_value(masterCodeValue);
        	this.Edit01.setFocus();
        	
        }

        // 저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.Edit01.value == null || this.Edit01.getLength() != 3){
        		this.alert("분류코드는 세 자리로 작성됩니다.");
        		this.Edit01.setFocus();
        		return;
        	}else if(this.Edit02.value == null){
        		this.alert("상세코드명을 확인해주세요.");
        		this.Edit02.setFocus();
        		return;
        	}else if(this.Combo01.index == -1){
        		this.alert("사용여부를 확인해주세요");
        		this.Combo01.setFocus();
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
        	
        	var updateId = application.gds_User.getColumn(application.gds_User.rowposition, "id"); 
        	
        	var strParam = "updateId=" + updateId;
        	
        	rowNum = this.ds_cmmCode.rowposition;
        	
        	var strSvcid = sSvcid;
        	var strController = "cmmCode/editCmmCode.do";
        	
        	this.gfn_transaction(this,
        						strSvcid,
        						strController,
        						"ds_input=ds_cmmCode:U",
        						"",
        						strParam,
        						"transaction_callback"
        						);
        	
        }

        // 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	var confirmStr = this.confirm("삭제하시겠습니까?");
        	
        	if(confirmStr){
        		this.ds_cmmCode.deleteRow(this.ds_cmmCode.rowposition);
        		this.code_transaction("deleteCode");
        	}
        }

        // 코드 대문자 변환
        this.Edit01_ontextchanged = function(obj,e)
        {
        	var strLow = obj.value;
        	var strUpper = strLow.toUpperCase();
        	obj.set_value(strUpper);
        }

        // 메인테이블 대문자 변환
        this.Edit04_ontextchanged = function(obj,e)
        {
        	var strLow = obj.value;
        	var strUpper = strLow.toUpperCase();
        	obj.set_value(strUpper);
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
        	this.ds_cmmCode.filter("");
        	
        	this.ds_cmmCode.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("detailList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("detailList", 0, "succ");
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
            this.addEventHandler("onload", this.PD_IN_COM_MM003_onload, this);
            this.sta_01.addEventHandler("onclick", this.sta_01_onclick, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.sta_15.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_19.addEventHandler("onclick", this.sta_19_onclick, this);
            this.grd_plaintiff.addEventHandler("oncellclick", this.grd_plaintiff_oncellclick, this);
            this.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_02.addEventHandler("onclick", this.sta_18_onclick, this);
            this.sta_04.addEventHandler("onclick", this.sta_16_onclick, this);
            this.sta_06.addEventHandler("onclick", this.sta_06_onclick, this);
            this.sta_07.addEventHandler("onclick", this.sta_16_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.btn_mody00.addEventHandler("onclick", this.btn_mody00_onclick, this);
            this.btn_mody01.addEventHandler("onclick", this.btn_mody01_onclick, this);
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
            this.sta_05.addEventHandler("onclick", this.sta_18_onclick, this);
            this.sta_00.addEventHandler("onclick", this.sta_19_onclick, this);
            this.Edit01.addEventHandler("ontextchanged", this.Edit01_ontextchanged, this);
            this.sta_03.addEventHandler("onclick", this.sta_18_onclick, this);
            this.sta_08.addEventHandler("onclick", this.sta_18_onclick, this);
            this.sta_09.addEventHandler("onclick", this.sta_19_onclick, this);
            this.Edit04.addEventHandler("ontextchanged", this.Edit04_ontextchanged, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("PD_IN_COM_MM003.xfdl");

       
    };
}
)();
