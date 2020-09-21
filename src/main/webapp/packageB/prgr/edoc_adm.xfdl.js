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
                this.set_name("edoc_adm");
                this.set_classname("edoc_adm");
                this.set_titletext("New Form");
                this.set_enable("true");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_accessibility("disable all '' '' ''");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edoc_gab", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocKind\" type=\"STRING\" size=\"256\"/><Column id=\"edocName\" type=\"STRING\" size=\"256\"/><Column id=\"edocWdate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edoc_eul", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocKind\" type=\"STRING\" size=\"256\"/><Column id=\"edocName\" type=\"STRING\" size=\"256\"/><Column id=\"edocWdate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_case", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_accusee", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edoccode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edockind", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitRaisRea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edoc_tmp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocKind\" type=\"STRING\" size=\"256\"/><Column id=\"edocName\" type=\"STRING\" size=\"256\"/><Column id=\"edocWdate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"edocSeq\"/><Col id=\"edocSepcode\"/><Col id=\"lawsuitAdmNo\"/><Col id=\"edocNo\"/><Col id=\"edocKind\"/><Col id=\"edocName\"/><Col id=\"edocWdate\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edoc_adm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozkindSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmWritDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitstatus", this);
            obj._setContents("<ColumnInfo><Column id=\"tabEdocAdm\" type=\"STRING\" size=\"256\"/><Column id=\"tabJudg\" type=\"STRING\" size=\"256\"/><Column id=\"tabLawFixinfo\" type=\"STRING\" size=\"256\"/><Column id=\"tabLawsuit\" type=\"STRING\" size=\"256\"/><Column id=\"tabMediation\" type=\"STRING\" size=\"256\"/><Column id=\"tabPladef\" type=\"STRING\" size=\"256\"/><Column id=\"tabPreIwr\" type=\"STRING\" size=\"256\"/><Column id=\"tabReconcil\" type=\"STRING\" size=\"256\"/><Column id=\"tabAlseSue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_02", "absolute", "514", "344", "495", "139", null, null, this);
            obj.set_taborder("140");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "344", "495", "139", null, null, this);
            obj.set_taborder("139");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "14", "498", "996", "87", null, null, this);
            obj.set_taborder("131");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "49", "553", "954", "25", null, null, this);
            obj.set_taborder("134");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "49", "529", "954", "25", null, null, this);
            obj.set_taborder("133");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "49", "505", "954", "25", null, null, this);
            obj.set_taborder("132");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "14", "138", "996", "150", null, null, this);
            obj.set_taborder("130");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "321", "91", "23", null, null, this);
            obj.set_text("사건호증목록");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 10 dotum");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "20", "192", "983", "90", null, null, this);
            obj.set_taborder("141");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_2", "absolute", "948", "319", "55", "23", null, null, this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_1", "absolute", "433", "319", "55", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "49", "70", "954", "25", null, null, this);
            obj.set_taborder("129");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("0");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "285", "71", "55", "23", null, null, this);
            obj.set_taborder("25");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "942", "71", "55", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "21", "121", "99", "23", null, null, this);
            obj.set_text("소송기본사항");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "20", "144", "983", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14", "absolute", "20", "168", "983", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "144", "115", "25", null, null, this);
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "20", "168", "115", "25", null, null, this);
            obj.set_text("신청법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "353", "144", "115", "25", null, null, this);
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "353", "168", "115", "25", null, null, this);
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "680", "144", "115", "25", null, null, this);
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "680", "168", "115", "25", null, null, this);
            obj.set_text("피고");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27", "absolute", "20", "192", "115", "90", null, null, this);
            obj.set_text("소송제기사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_case", "absolute", "800", "147", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_case");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Combo("cmb_court", "absolute", "140", "171", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_enable("false");

            obj = new TextArea("txt_comment", "absolute", "139", "195", "858", "84", null, null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("fixedvert");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_caseNo", "absolute", "473", "147", "140", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_raisreqNo", "absolute", "140", "147", "140", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_accused", "absolute", "800", "171", "140", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_accusee", "absolute", "473", "171", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_accusee");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_enable("false");

            obj = new Button("btn_add_1", "absolute", "370", "319", "55", "23", null, null, this);
            obj.set_taborder("33");
            obj.set_text("추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_2", "absolute", "885", "319", "55", "23", null, null, this);
            obj.set_taborder("34");
            obj.set_text("추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_edoc_gab", "absolute", "20", "351", "482", "126", null, null, this);
            obj.set_taborder("45");
            obj.set_binddataset("ds_edoc_gab");
            obj.set_scrollbars("fixedvert");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"127\"/><Column size=\"213\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"갑호증\"/><Cell row=\"1\" text=\"No.\"/><Cell row=\"1\" col=\"1\" edittype=\"text\" text=\"종류\" combodataset=\"ds_edockind\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell row=\"1\" col=\"2\" text=\"명칭\"/><Cell row=\"1\" col=\"3\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:edocNo\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:edocKind\" combodataset=\"ds_edockind\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:edocName\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:edocWdate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_edoc_eul", "absolute", "521", "351", "481", "125", null, null, this);
            obj.set_taborder("46");
            obj.set_binddataset("ds_edoc_eul");
            obj.set_scrollbars("fixedvert");
            obj.set_autofittype("col");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"122\"/><Column size=\"207\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"을호증\"/><Cell row=\"1\" text=\"No.\"/><Cell row=\"1\" col=\"1\" text=\"종류\"/><Cell row=\"1\" col=\"2\" text=\"명칭\"/><Cell row=\"1\" col=\"3\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:edocNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:edocKind\" combodataset=\"ds_edockind\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:edocName\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:edocWdate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_reg", "absolute", "884", "597", "55", "23", null, null, this);
            obj.set_taborder("60");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "-8", "499", "120", "30", null, null, this);
            obj.set_taborder("87");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,10,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg00", "absolute", "14", "7", "996", "49", null, null, this);
            obj.set_taborder("106");
            obj.style.set_background("#3366ffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "24", "14", "168", "29", null, null, this);
            obj.set_taborder("107");
            obj.set_text("서증관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "505", "115", "25", null, null, this);
            obj.set_taborder("109");
            obj.set_text("호증구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "553", "115", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("첨부파일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "529", "115", "25", null, null, this);
            obj.set_taborder("111");
            obj.set_text("서증명칭");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "679", "529", "115", "25", null, null, this);
            obj.set_taborder("112");
            obj.set_text("작성일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edocname", "absolute", "140", "532", "140", "19", null, null, this);
            obj.set_taborder("113");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploade", "absolute", "229", "553", "70", "23", null, null, this);
            obj.set_taborder("114");
            obj.set_text("파일추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_edockind", "absolute", "799", "508", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("115");
            obj.set_innerdataset("@ds_edockind");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Calendar("cal_edocwdate", "absolute", "799", "532", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("116");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Combo("cmb_edoccode", "absolute", "140", "508", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("117");
            obj.set_innerdataset("@ds_edoccode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");

            obj = new Static("Static05", "absolute", "345", "505", "123", "25", null, null, this);
            obj.set_taborder("118");
            obj.set_text("호증번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edocno", "absolute", "473", "508", "140", "19", null, null, this);
            obj.set_taborder("119");
            obj.set_maxlength("5");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_lengthunit("utf8");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "679", "505", "115", "25", null, null, this);
            obj.set_taborder("120");
            obj.set_text("호증종류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "148", "555", "47", "23", null, null, this);
            obj.set_taborder("121");
            obj.set_text("현 파일");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "212", "555", "39", "22", null, null, this);
            obj.set_taborder("122");
            obj.set_text("개");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "948", "597", "55", "23", null, null, this);
            obj.set_taborder("127");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("fileCount", "absolute", "184", "555", "25", "23", null, null, this);
            obj.set_taborder("128");
            obj.set_text("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "697", "508", "37", "23", null, null, this);
            obj.set_taborder("135");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "697", "531", "37", "23", null, null, this);
            obj.set_taborder("136");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "368", "507", "37", "23", null, null, this);
            obj.set_taborder("137");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "41", "531", "37", "23", null, null, this);
            obj.set_taborder("138");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("edoc_adm");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");
            		p.set_enable("true");
            		p.style.set_accessibility("disable all '' '' ''");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_no","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmb_case","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmb_court","value","ds_lawsuit","lawsuitAplCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","txt_comment","value","ds_lawsuit","lawsuitRaisRea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_caseNo","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_raisreqNo","value","ds_lawsuit","lawRaisreqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_accused","value","ds_pladef","pladefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmb_accusee","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cmb_case","text","ds_case","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cmb_court","text","ds_court","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cmb_accusee","text","ds_accusee","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","grd_edoc_gab","","ds_edoccode","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","grd_edoc_eul","","ds_edoccode","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_edocname","value","ds_edoc_tmp","edocName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmb_edockind","text","ds_edockind","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cmb_edockind","value","ds_edoc_tmp","edocKind");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","cal_edocwdate","value","ds_edoc_tmp","edocWdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cmb_edoccode","text","ds_edoccode","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cmb_edoccode","value","ds_edoc_tmp","edocSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_edocno","value","ds_edoc_tmp","edocNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("edoc_adm.xfdl", "Lib::common.xjs");
        this.registerScript("edoc_adm.xfdl", function() {
        //include "Lib::common.xjs"; 

        this.g_nLawsuitNo = 0;
        this.g_strEdoc = "";
        this.g_nRowPos = 0;

        var lawsrcrlt = "";		//소송관리번호
        var instcdrlt = "";		//심급코드

        
        this.edoc_adm_onload = function(obj,e)
        {
        // 	var strController = "svcurl::code/selectCodeList.do";
        // 	var strParam = "AllYn=Y, AllCode='', AllName='', ";
        // 	
        // 	this.transaction("trCase", strController, "", "ds_case=ds_output", strParam+"CLASS_CODE=A02", "fnCallback");
        // 	this.transaction("trCourt", strController, "", "ds_court=ds_output", strParam+"CLASS_CODE=A01", "fnCallback");
        // 	this.transaction("trAccusee", strController, "", "ds_accusee=ds_output", strParam+"CLASS_CODE=H02", "fnCallback");
        // 
        // 	this.transaction("trEdocCode", strController, "", "ds_edoccode=ds_output", strParam+"CLASS_CODE=F01", "fnCallback");
        // 	this.transaction("trEdocKind", strController, "", "ds_edockind=ds_output", strParam+"CLASS_CODE=F02", "fnCallback");
        	
        }

        this.fnCallback=function(strSvcId,nErrCode,strErrMessage)
        {
        	var strParam="lawsuitAdmNo="+"\""+this.g_nLawsuitNo+"\"";
        	

        	switch(strSvcId)
        	{	
        		case "trComCode": 
        			break;	
        		
        		case "law_suitSelect":
        			this.g_nRowPos = 0;
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			}
        			else{
        				this.getEdocAdmList(this.g_nLawsuitNo);
        				this.getlawinfo(this.g_nLawsuitNo);
        							
        				this.transaction("pla_defSelect", "svcurl::edoc_adm/edoc_pladefSelect.do", "", "ds_pladef=ds_output", strParam, "fnCallback"); 
        			}
        			break;	
        		
        		case "pla_defSelect":
        			if(nErrCode == "0"){
        				this.transaction("edoc_admSelect1", "svcurl::edoc_adm/edoc_admSelect1.do", "", "ds_edoc_gab=ds_output", strParam, "fnCallback"); 
        			}
        			break;	
        		
        		case "edoc_admSelect1":
        			if(nErrCode == "0"){
        				this.transaction("edoc_admSelect2", "svcurl::edoc_adm/edoc_admSelect2.do", "", "ds_edoc_eul=ds_output", strParam, "fnCallback"); 
        			}
        			break;		
        		
        		case "edoc_admSelect2":
        // 			trace("갑 >> " + this.ds_edoc_gab.saveXML());
        // 			trace("을 >> " + this.ds_edoc_eul.saveXML());
        			/*alert(this.ds_edoc_adm.saveXML());*/
        			this.edt_edocno.set_enable(true);
        			this.cmb_edockind.set_enable(true);
        			this.edt_edocname.set_enable(true);
        			this.cal_edocwdate.set_enable(true);
        			this.btn_uploade.set_enable(true);
        			
        			this.ds_edoc_gab.set_rowposition(-1);
        			this.ds_edoc_eul.set_rowposition(-1);
        			break;
        		
        		case "edoc_admSave1":
        			if(nErrCode == "0"){
        			
        				var strController = "svcurl::edoc_adm/edoc_admSave.do";			
        				this.transaction("edoc_admSave2", strController, "ds_input=ds_edoc_eul:U", "", "", "fnCallback");	
        			}
        			break;	
        		// 20.01.22 서증 첨부파일 갯수
        		case "getEdocAddFile" : 
        			this.fileCount.set_text(this.ds_file.rowcount);
        			break;	
        			
        		case "trCase": 
        		case "trCourt": 
        		case "trAccusee": 
        		case "trEdocCode": 
        		case "trEdocKind": 
        			break;
        		case "edoc_admSave2":
        			this.LawsuitSearch();
        			
        			break;
        	
        			
        	}
        }

        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        		 
        	var newChild = new ChildFrame;
        	newChild.init("SearchNo"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        																	
        }

        this.modal_callback = function(sSvcId,variant)
        {
        	if(sSvcId == "SearchNo")
        	{
        		if(this.gfn_IsNull(variant)==false){
        			var strController = "svcurl::code/selectCodeList.do";
        			var strParam = "AllYn=Y, AllCode='', AllName='', ";
        			
        			this.transaction("trCase", strController, "", "ds_case=ds_output", strParam+"CLASS_CODE=A02", "fnCallback");
        			this.transaction("trCourt", strController, "", "ds_court=ds_output", strParam+"CLASS_CODE=A01", "fnCallback");
        			this.transaction("trAccusee", strController, "", "ds_accusee=ds_output", strParam+"CLASS_CODE=H02", "fnCallback");

        			this.transaction("trEdocCode", strController, "", "ds_edoccode=ds_output", strParam+"CLASS_CODE=F01", "fnCallback");
        			this.transaction("trEdocKind", strController, "", "ds_edockind=ds_output", strParam+"CLASS_CODE=F02", "fnCallback");		
        			
        			this.g_nLawsuitNo = variant.substr(0,10);
        			this.LawsuitSearch();
        			
        		}else{
        			return false;
        		}
        	} else if(sSvcId == "addFile") {
        		
        		var tmpObj = JSON.parse(variant);
        		
        		this.ds_file.loadXML(tmpObj.ds_file);
        		//this.fileCount.set_text(this.ds_file.rowcount);
        		
        	}

        }

        
        this.LawsuitSearch=function()
        {
        	var strParam="lawsuitAdmNo="+"\""+this.g_nLawsuitNo+"\"";
        	this.transaction("law_suitSelect", "svcurl::edoc_adm/edoc_lawsuitSelect.do", "", "ds_lawsuit=ds_output", strParam, "fnCallback"); 	
        }

        
        this.nullcheck = function(strDisplay)
        {
        	var strMessage = "";
        	
        	if(this.gfn_IsNull(this.edt_edocno.value)&&this.g_nRowPos)
        	{
        		strMessage = "호증번호를 입력해 주십시오!";
        		this.edt_edocno.setFocus();
        	}
        	else if(this.gfn_IsNull(this.edt_edocname.value)&&this.g_nRowPos ){
        		strMessage = "서증명칭을 입력해주십시오!";
        		this.edt_edocname.setFocus();
        	}
        	else if(this.gfn_IsNull(this.cmb_edockind.value)&&this.g_nRowPos ){
        		strMessage = "호증종류를 선택해 주십시오!";
        		this.cmb_edockind.setFocus();
        	}
        	else if(this.gfn_IsNull(this.cal_edocwdate.value)&&this.g_nRowPos ){
        		strMessage = "작성일자를 입력해 주십시오!";
        		this.cal_edocwdate.setFocus();
        	}
        	

        	if(strDisplay=="YES" && strMessage) 
        	{
        		alert(strMessage);
        	}
        	
        	if(strMessage) 
        	{
        		return false;
        	}
        	else 
        	{
        		return true;
        	}
        	
        }

        this.clearTemp = function()
        {
        	this.edt_edocno.set_value("");
        	this.edt_edocname.set_value("");
        	this.cmb_edockind.set_index(0);
        	this.cal_edocwdate.set_value("");
        	
        // 	this.ds_edoc_tmp.setColumn(0, "edocNo", "");
        // 	this.ds_edoc_tmp.setColumn(0, "edocKind", "");
        // 	this.ds_edoc_tmp.setColumn(0, "edocWdate", "");
        // 	this.ds_edoc_tmp.setColumn(0, "edocName", "");
        	

        }

        this.btn_add_1_onclick = function(obj,e)
        {
        	
        	if(this.ds_lawsuit.rowcount == 0) {
        		alert("먼저 소송관리 번호를 검색해주세요.");
        		return null;
        	}
        	

        	var strSepCode = this.ds_edoccode.getColumn(0, "codeno");
        	
        	var type1 = this.ds_edoc_gab.getRowType(this.ds_edoc_gab.rowposition);
        	var type2 = this.ds_edoc_eul.getRowType(this.ds_edoc_eul.rowposition);
        		
        	if(type1 == Dataset.ROWTYPE_INSERT || type2 == Dataset.ROWTYPE_INSERT)
        	{
        		alert("이미 추가된 사건호증을 입력하거나, 삭제해주세요.");
        		return;
        	}
        	else
        	{
        		this.g_strEdoc = "EDOC_GAB";
        		
        		this.g_nRowPos = this.ds_edoc_gab.addRow();
        		this.ds_edoc_gab.setColumn(this.g_nRowPos, "edocSepcode", strSepCode);
        		this.ds_edoc_gab.setColumn(this.g_nRowPos, "lawsuitAdmNo", this.g_nLawsuitNo);
        		this.ds_edoc_gab.setColumn(this.g_nRowPos, "edocWdate", this.makeToday());
        		
        		this.ds_edoc_tmp.copyRow(0, this.ds_edoc_gab, this.g_nRowPos);
        		
        		this.cmb_edoccode.set_index(0);
        		this.cmb_edockind.set_index(0);
        		
        // 		this.grd_edoc_gab.selectRow(this.g_nRowPos);
        // 		this.grd_edoc_gab.setFocus();
        			
        	}	
        	
        	this.ds_edoc_gab.set_rowposition(this.g_nRowPos);
        	this.ds_edoc_eul.set_rowposition(-1);
        	this.getFileCount();
        }

        this.btn_delete_1_onclick = function(obj,e)
        {	
        	if(this.edt_no.text == ""){
        		alert("먼저 소송관리번호를 조회해주세요.");
        		return;
        	}
        	
        	
        	var strParam = ""
        	strParam += "lawsuitAdmNo='" + this.ds_edoc_gab.getColumn(this.ds_edoc_gab.rowposition, "lawsuitAdmNo") + "'" 
        	strParam += "edocSeq='" + this.ds_edoc_gab.getColumn(this.ds_edoc_gab.rowposition, "edocSeq") + "'" 
        	
        	var strController = "svcurl::edoc_adm/edoc_admDelete.do";			
        	this.transaction("edoc_admDelete", strController, "ds_input=ds_edoc_gab:U", "", strParam, "fnCallback");	
        	
        	this.ds_edoc_gab.deleteRow(this.ds_edoc_gab.rowposition);
        	
        	this.ds_edoc_gab.set_rowposition(-1);
        // 	this.g_nRowPos = this.ds_edoc_gab.rowposition;
        // 	this.ds_edoc_tmp.copyRow(0, this.ds_edoc_gab, this.g_nRowPos);
        // 	
        	
        	//this.ds_edoc_tmp.clearData();
        	this.clearTemp();
        	//this.ds_edoc_gab.setFocus();
        	
        }

        this.btn_add_2_onclick = function(obj,e)
        {
        	
        	if(this.ds_lawsuit.rowcount == 0) {
        		alert("먼저 소송관리 번호를 검색해주세요.");
        		return null;
        	}
        	
        	var strSepCode = this.ds_edoccode.getColumn(1, "codeno");
        	
        	var type1 = this.ds_edoc_gab.getRowType(this.ds_edoc_gab.rowposition);
        	var type2 = this.ds_edoc_eul.getRowType(this.ds_edoc_eul.rowposition);
        		
        	if(type1 == Dataset.ROWTYPE_INSERT || type2 == Dataset.ROWTYPE_INSERT)
        	{
        		alert("이미 추가된 사건호증을 입력하거나, 삭제해주세요.");
        		return;
        	}
        	else
        	{
        	//	this.clearTemp();
        		
        		this.g_strEdoc = "EDOC_EUL";
        		
        		this.g_nRowPos = this.ds_edoc_eul.addRow();
        		this.ds_edoc_eul.setColumn(this.g_nRowPos, "edocSepcode", strSepCode);
        		this.ds_edoc_eul.setColumn(this.g_nRowPos, "lawsuitAdmNo", this.g_nLawsuitNo);
        		this.ds_edoc_eul.setColumn(this.g_nRowPos, "edocWdate", this.makeToday());
        		
        		this.ds_edoc_tmp.copyRow(0, this.ds_edoc_eul, this.g_nRowPos);
        		
        		this.cmb_edoccode.set_index(1);
        		this.cmb_edockind.set_index(0);
        		
        // 		this.grd_edoc_eul.selectRow(this.g_nRowPos);
        // 		this.grd_edoc_eul.setFocus();
        	}
        	
        	this.ds_edoc_gab.set_rowposition(-1);
        	this.ds_edoc_eul.set_rowposition(this.g_nRowPos);
        	this.getFileCount();
        	
        }

        this.btn_delete_2_onclick = function(obj,e)
        {
        	if(this.edt_no.text == ""){
        		alert("먼저 소송관리번호를 조회해주세요.");
        		return;
        	}
        	
        	
        	var strParam = ""
        	strParam += "lawsuitAdmNo='" + this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition, "lawsuitAdmNo") + "'" 
        	strParam += "edocSeq='" + this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition, "edocSeq") + "'" 
        	
        	var strController = "svcurl::edoc_adm/edoc_admDelete.do";			
        	this.transaction("edoc_admDelete", strController, "ds_input=ds_edoc_gab:U", "", strParam, "fnCallback");	
        	
        	this.ds_edoc_eul.deleteRow(this.ds_edoc_eul.rowposition);
        	
         	this.ds_edoc_eul.set_rowposition(-1);
        // 	this.g_nRowPos = this.ds_edoc_eul.rowposition;
        // 	this.ds_edoc_tmp.copyRow(0, this.ds_edoc_eul, this.g_nRowPos);
        	
        	this.clearTemp();
        	//this.ds_edoc_tmp.clearData();
        	
        	//this.clearTemp();
        	
        	//this.grd_edoc_eul.setFocus();
        }

        this.grd_edoc_gab_oncellclick = function(obj,e)
        {
        	
        	this.ds_edoc_eul.set_rowposition(-1);
        	
        	this.g_strEdoc = "EDOC_GAB";
        	this.g_nRowPos = this.ds_edoc_gab.rowposition;

        	this.ds_edoc_tmp.copyRow(0, this.ds_edoc_gab, this.g_nRowPos);	

        		
        /*	var bNotNull = this.nullcheck("YES");
        	
        	if (bNotNull) {
        	
        		this.g_strEdoc = "EDOC_GAB";
        		this.g_nRowPos = this.ds_edoc_gab.rowposition;
        	
        		this.ds_edoc_tmp.copyRow(0, this.ds_edoc_gab, this.g_nRowPos);	
        		
        	} 
        	else {
        		if(this.g_strEdoc=="EDOC_GAB") 
        		{
        			this.ds_edoc_gab.set_rowposition(this.g_nRowPos);
        		} 
        		else 
        		{
        			this.ds_edoc_eul.set_rowposition(this.g_nRowPos);
        		}
        		//this.grd_edoc_gab.selectRow(this.g_nRowPos);
        		//this.grd_edoc_gab.setFocus();
        		
        	}
        */	
        	
        	this.getFileCount();
        	
        }

        this.grd_edoc_eul_oncellclick = function(obj,e)
        {
        	this.ds_edoc_gab.set_rowposition(-1);
        	
        	this.g_strEdoc = "EDOC_EUL";
        	this.g_nRowPos = this.ds_edoc_eul.rowposition;

        	this.ds_edoc_tmp.copyRow(0, this.ds_edoc_eul, this.g_nRowPos); 	

        /*	var bNotNull = this.nullcheck("YES");
        	
        	if (bNotNull) {

        		this.g_strEdoc = "EDOC_EUL";
        		this.g_nRowPos = this.ds_edoc_eul.rowposition;

        		this.ds_edoc_tmp.copyRow(0, this.ds_edoc_eul, this.g_nRowPos); 	
        	}	
        	else {
        		if(this.g_strEdoc=="EDOC_GAB") {
        			this.ds_edoc_gab.set_rowposition(this.g_nRowPos);
        		} 
        		else {
        			this.ds_edoc_eul.set_rowposition(this.g_nRowPos);
        		}
        		//this.ds_edoc_eul.selectRow(this.g_nRowPos);
        		//this.ds_edoc_gab.setFocus();
        	}
        */	
        	this.getFileCount();
        }

        this.ds_edoc_tmp_onvaluechanged = function(obj,e)
        {
        	if(this.g_strEdoc == "EDOC_GAB") {
        	
        		this.ds_edoc_gab.copyRow(this.g_nRowPos, this.ds_edoc_tmp, 0); 
        	
        	} else {
        	
        		this.ds_edoc_eul.copyRow(this.g_nRowPos, this.ds_edoc_tmp, 0); 
        	
        	}
        }

        this.btn_lawsuit_reg_onclick = function(obj,e)
        {
        	
        	if(this.edt_no.text == ""){
        		alert("먼저 소송관리번호를 조회해주세요.");
        		return;
        	}
        	
        	var bNotNull = this.nullcheck("YES");
        	
        	var type1 = this.ds_edoc_gab.getRowType(this.ds_edoc_gab.rowposition);
        	var type2 = this.ds_edoc_eul.getRowType(this.ds_edoc_eul.rowposition);
        	
        	
        	
        	this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition, "");
        	
        	
        	if (bNotNull)
        	{
        		if(this.g_strEdoc == "EDOC_GAB") {
        		
        			this.ds_edoc_gab.copyRow(this.g_nRowPos, this.ds_edoc_tmp, 0); 
        		
        		} else {
        		
        			this.ds_edoc_eul.copyRow(this.g_nRowPos, this.ds_edoc_tmp, 0); 
        		
        		}
        		
        		var strController = "svcurl::edoc_adm/edoc_admSave.do";			
        		this.transaction("edoc_admSave1", strController, "ds_input=ds_edoc_gab:U", "", "", "fnCallback");	
        	}
        		
        }

        this.btn_close_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.btn_uploade_onclick = function(obj,e)
        {
        	if(this.edt_no.text == "") {
        		alert("소송관리번호를 조회해주세요.");
        		return;
        	}
        // 	 else if(this.ds_edoc_adm.getRowCount() < 1 || (this.ds_edoc_gab.rowposition < 0 && this.ds_edoc_eul.rowposition < 0 )) {
        // 		alert("사건호증목록 작성 후 첨부하세요.");
        // 		return;
        // 	} 
        // 	else if(this.ds_edoc_eul.getRowType(this.ds_edoc_eul.rowposition) == 4 || this.ds_edoc_gab.getRowType(this.ds_edoc_gab.rowposition) == 4) {
        // 		alert("먼저 저장버튼 후 첨부해주세요..");
        // 		return;
        // 	 }
        	 else {
        		var chnScrn = '009';
        		var memAddFileSep = '서증';
        		var memAddFileNo = this.edt_no.text;
        		var edocAdmSeq = "";
        		
        		//if(this.gfn_IsNull(this.ds_edoc_adm.getColumn(this.ds_edoc_adm.rowposition,"edocAdmSeq"))){
        		
        		if(this.gfn_IsNull(this.ds_edoc_gab.getColumn(this.ds_edoc_gab.rowposition,"edocSeq")) &&
        		   this.gfn_IsNull(this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition,"edocSeq"))){
        			var edocAdmSeqNo1 = this.ds_edoc_eul.rowcount + this.ds_edoc_gab.rowcount;
        			edocAdmSeq = edocAdmSeqNo1;
        			
        			
        		}else {

        			var edocAdmSeq1 = this.ds_edoc_gab.getColumn(this.ds_edoc_gab.rowposition,"edocSeq");
        			var edocAdmSeq2 = this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition,"edocSeq");
        			
        			if(this.ds_edoc_gab.getRowCount() == 0 || edocAdmSeq1 == null){
        				edocAdmSeq1 = "";
        			} 
        			if(this.ds_edoc_eul.getRowCount() == 0 || edocAdmSeq2 == null ){
        				edocAdmSeq2 = "";
        			}
        			
        			edocAdmSeq = edocAdmSeq1 + "" + edocAdmSeq2;
        			
        			//trace("::::::::"+edocAdmSeq+"::::::::edocAdmSeq::::::::else ");
        			
        		}
        		
        		var BookNo = chnScrn
        					+ memAddFileSep
        					+ memAddFileNo
        					+ edocAdmSeq;
        		
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		
        		//trace("ㄷㄷㄷㄷㄷ >> " + this.ds_edoc_adm.saveXML());
        		
        		var newChild = new ChildFrame;
        		newChild.init("addFile"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "com::ADD_FILE.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame()
        							, {BookNo:BookNo}
        							, this
        							, "modal_callback");
         		}
        		
        		//getFileCount();
        	
        }

        this.getEdocAdmList = function(lawsrcrlt) {
        	var strSvcID = "getEdocAdmList";
        	var strURL = "svcurl::progress/getEdocAdmList.do";
        	var strInDatasets = "";
        	var strOutDatasets = "ds_edoc_adm=ds_output";
        	var strArgument = "lawsuitAdmNo=" + "\"" + lawsrcrlt + "\"";
        	var strCallbackFunc = "fnCallback";
                
            this.transaction(strSvcID,
        				strURL,
        				strInDatasets,
        				strOutDatasets,
        				strArgument,
        				strCallbackFunc);

        }

        this.getlawinfo = function(lawsrcrlt) {
        	var strSvcID = "LawsuitStatus";
        	var strURL = "svcurl::lawsuit/getLawsuitStatus.do";
        	//var strVoClass1="pdsystem.lawsuit.model.LawsuitVO";
        	var strInputDs = "";
        	var strOutputDs = "ds_lawsuitstatus=ds_output";
        	var strFnCallback = "fnCallback";
        	var strParam = "";
        	strParam+="lawsuitAdmNo=" + "\"" + lawsrcrlt + "\"";	//소송관리번호 
        			
        	this.transaction(strSvcID,
        				strURL,
        				strInputDs,
        				strOutputDs,
        				strParam,
        				strFnCallback);
        }
        this.grd_edoc_gab_onsetfocus = function(obj,e)
        {	
        	
        }

        this.grd_edoc_eul_onsetfocus = function(obj,e)
        {
        	
        }

        
        //20.01.22 getFileCount
        this.getFileCount = function ()
        {
        	this.ds_file.clearData();
        	
        	var memAddFileNo = this.edt_no.text;
        	var edocAdmSeq = "";

        	if(this.ds_edoc_eul.rowposition  == -1 ){
        		edocAdmSeq = this.ds_edoc_gab.getColumn(this.ds_edoc_gab.rowposition ,"edocSeq");
        	}else if(this.ds_edoc_gab.rowposition == -1){
        		edocAdmSeq = this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition ,"edocSeq");
        	}
        	
        	var strParam ="";
        	
        	strParam += "lawsuitAdmNo=" + "\"" + memAddFileNo + "\"";
        	strParam += " edocAdmSeq=" + "\"" + edocAdmSeq + "\"";
        	
        	this.transaction("getEdocAddFile"
        				,"svcurl::common/getEdocAddFile.do"
        				,""
        				,"ds_file=ds_output"
        				,strParam
        				,"fnCallback"
        				); 
        }

        this.makeToday = function() {
        	var nDate = new Date()
        	var tmpYear = nDate.getYear();
        	var tmpMonth = (nDate.getMonth() + 1).toString().padLeft(2, "0");
        	var tmpDate = (nDate.getDate()).toString().padLeft(2, "0");
        	
        	return tmpYear + tmpMonth + tmpDate;
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_edoc_tmp.addEventHandler("onvaluechanged", this.ds_edoc_tmp_onvaluechanged, this);
            this.addEventHandler("onload", this.edoc_adm_onload, this);
            this.Static02.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_delete_2.addEventHandler("onclick", this.btn_delete_2_onclick, this);
            this.btn_delete_1.addEventHandler("onclick", this.btn_delete_1_onclick, this);
            this.edt_no.addEventHandler("oneditclick", this.edt_no_oneditclick, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.sta_12.addEventHandler("onclick", this.sta_12_onclick, this);
            this.btn_add_1.addEventHandler("onclick", this.btn_add_1_onclick, this);
            this.btn_add_2.addEventHandler("onclick", this.btn_add_2_onclick, this);
            this.grd_edoc_gab.addEventHandler("oncellclick", this.grd_edoc_gab_oncellclick, this);
            this.grd_edoc_gab.addEventHandler("onsetfocus", this.grd_edoc_gab_onsetfocus, this);
            this.grd_edoc_eul.addEventHandler("oncellclick", this.grd_edoc_eul_oncellclick, this);
            this.grd_edoc_eul.addEventHandler("onsetfocus", this.grd_edoc_eul_onsetfocus, this);
            this.btn_lawsuit_reg.addEventHandler("onclick", this.btn_lawsuit_reg_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_uploade.addEventHandler("onclick", this.btn_uploade_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("edoc_adm.xfdl");

       
    };
}
)();
