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
                this.set_name("EDOC_ADM");
                this.set_classname("OUT_fixinfo_skw");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_font("9 굴림체");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cort_ty_code", this);
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

            obj = new Dataset("ds_hoz_sepcode", this);
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
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplcortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitRaisRea\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edoc_adm_gap", this);
            obj.getSetter("strLoadfiltermode").set("keep");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"edocAdmHozSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozkindSepcode\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"edocAdmName\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"edocAdmWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_case_ty_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_def_code", this);
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

            obj = new Dataset("ds_hozkind_sepcode", this);
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

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edoc_adm_eul", this);
            obj.getSetter("strLoadfiltermode").set("keep");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"edocAdmHozSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmHozkindSepcode\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"edocAdmName\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"edocAdmWritDate\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view02", "absolute", "14", "270", "496", "254", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view04", "absolute", "513", "270", "496", "254", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view03", "absolute", "14", "580", "996", "85", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "142", "996", "86", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  서증관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "19", "147", "985", "75", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "28", "24", null, "26", "0", null, this.Div02);
            obj.set_taborder("20");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "21", "49", null, "26", "0", null, this.Div02);
            obj.set_taborder("21");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "40", "0", null, "26", "0", null, this.Div02);
            obj.set_taborder("19");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "115", "26", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_wordwrap("none");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "664", "25", "115", "25", null, null, this.Div02);
            obj.set_taborder("1");
            obj.set_text("피고");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "49", "115", "26", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("소송제기사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "314", "0", "115", "26", null, null, this.Div02);
            obj.set_taborder("3");
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "314", "25", "115", "25", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "664", "0", "115", "26", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("edt_AplCaseCode", "absolute", "434", "3", "140", "20", null, null, this.Div02);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("combo_CpPladefSepcode", "absolute", "434", "28", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_def_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Combo("combo_CaseTyCode", "absolute", "784", "3", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_case_ty_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Static("Static06", "absolute", "0", "25", "115", "25", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_text("신청법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("combo_AplCortCode", "absolute", "120", "27", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_cort_ty_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Edit("Edit2", "absolute", "784", "28", "140", "19", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("edt_RaisreqNo", "absolute", "120", "3", "140", "20", null, null, this.Div02);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "120", "52", "859", "20", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("subTitle_00", "fixed", "14", "122", "996", "15", null, null, this);
            obj.set_taborder("4");
            obj.set_text("소송기본사항");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_01", "absolute", "14", "247", null, "15", "894", null, this);
            obj.set_taborder("5");
            obj.set_text("사건호증목록");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del_eul", "absolute", "954", "243", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_Gap", "absolute", "21", "277", "482", "240", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_edoc_adm_gap");
            obj.set_autofittype("col");
            obj.set_scrollbars("fixedvert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"143\"/><Column size=\"178\"/><Column size=\"118\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" style=\"align:center middle;\" text=\"갑호증\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"종류\"/><Cell row=\"1\" col=\"2\" text=\"명칭\"/><Cell row=\"1\" col=\"3\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:edocAdmHozkindSepcode\" combodataset=\"ds_hozkind_sepcode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:edocAdmName\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:edocAdmWritDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", "894", "677", "55", "23", null, null, this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_02", "absolute", "14", "559", null, "15", "894", null, this);
            obj.set_taborder("12");
            obj.set_text("사건호증추가");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del_gap", "absolute", "455", "244", "55", "23", null, null, this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0", "absolute", "520", "277", "482", "240", null, null, this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_edoc_adm_eul");
            obj.set_autofittype("col");
            obj.set_scrollbars("fixedvert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"126\"/><Column size=\"153\"/><Column size=\"152\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"을호증\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"종류\"/><Cell row=\"1\" col=\"2\" text=\"명칭\"/><Cell row=\"1\" col=\"3\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:edocAdmHozkindSepcode\" combodataset=\"ds_hozkind_sepcode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:edocAdmName\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:edocAdmWritDate\" calendardisplay=\"edit\" calendardisplaynulltype=\"default\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg", "absolute", "954", "551", "55", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_text("등록");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_Adm_No", "absolute", "119", "2", "140", "19", null, null, this.Div01);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "265", "0", "55", "23", null, null, this.Div01);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("btn_clear", "absolute", "922", "0", "55", "23", null, null, this.Div01);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_create", "absolute", "894", "551", "55", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_text("추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "954", "677", "55", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "19", "585", "985", "75", null, null, this);
            obj.set_taborder("28");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "44", "48", "941", "25", null, null, this.Div03);
            obj.set_taborder("25");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "28", "0", "957", "25", null, null, this.Div03);
            obj.set_taborder("23");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "36", "24", "949", "25", null, null, this.Div03);
            obj.set_taborder("24");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "24", "115", "25", null, null, this.Div03);
            obj.set_taborder("26");
            obj.set_text("명칭");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "664", "24", "115", "25", null, null, this.Div03);
            obj.set_taborder("27");
            obj.set_text("작성일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "48", "115", "25", null, null, this.Div03);
            obj.set_taborder("28");
            obj.set_text("첨부파일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "115", "25", null, null, this.Div03);
            obj.set_taborder("29");
            obj.set_text("호증구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "332", "0", "115", "25", null, null, this.Div03);
            obj.set_taborder("30");
            obj.set_text("호증번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_Hoz_No", "absolute", "452", "3", "140", "19", null, null, this.Div03);
            obj.set_taborder("31");
            obj.set_inputtype("number");
            obj.set_maxlength("40");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "664", "0", "115", "25", null, null, this.Div03);
            obj.set_taborder("32");
            obj.set_text("호증종류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("combo_Hozkind_Sepcode", "absolute", "784", "3", "140", "19", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_innerdataset("@ds_hozkind_sepcode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj = new Calendar("cal_Writ_Date", "absolute", "784", "27", "140", "19", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyyMMdd");
            obj = new Combo("combo_hoz_sep", "absolute", "120", "2", "140", "19", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("@ds_hoz_sepcode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj = new Edit("Edit00", "absolute", "120", "27", "539", "19", null, null, this.Div03);
            obj.set_taborder("36");
            obj.set_maxlength("100");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_fileAdd", "absolute", "264", "634", "60", "23", null, null, this);
            obj.set_taborder("24");
            obj.set_text("첨부파일");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("fileCount", "absolute", "128", "637", "130", "19", null, null, this);
            obj.set_taborder("25");
            obj.set_text("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1011, 49, this.DivTitle,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  서증관리");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 dotum");

            	}
            );
            this.DivTitle.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 985, 75, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eaeaeaff");
            		p.set_scrollbars("none");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 984, 25, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.style.set_background("#f0f0f0ff");
            		p.style.set_border("1 solid #a8a8a8ff");
            		p.set_scrollbars("none");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 985, 75, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_scrollbars("none");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OUT_fixinfo_skw");
            		p.style.set_font("9 굴림체");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div01.edt_Adm_No","value","ds_search","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div02.edt_RaisreqNo","value","ds_lawsuit","lawRaisreqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div02.edt_AplCaseCode","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div02.combo_CaseTyCode","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div02.combo_AplCortCode","value","ds_lawsuit","lawsuitAplcortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div02.combo_CpPladefSepcode","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div02.Edit2","value","ds_lawsuit","pladefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div02.TextArea00","value","ds_lawsuit","lawsuitRaisRea");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OUT_edoc_adm.xfdl", "Lib::common.xjs");
        this.registerScript("OUT_edoc_adm.xfdl", function() {
        //include "Lib::common.xjs";

        var	lawsrcrlt = "";		//소송관리번호
        var instcdrlt = "";		//심급코드

        
        this.EDOC_ADM_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	this.gf_codeComListLoad("ds_ComCode00", "ds_case_ty_code", "N", "", "", "fn_callback", "A02"); //사건유형
        	this.gf_codeComListLoad("ds_ComCode01", "ds_cort_ty_code", "N", "", "", "fn_callback", "A01"); //신청법원 공통코드
        	this.gf_codeComListLoad("ds_ComCode02", "ds_def_code", "N", "", "", "fn_callback", "H02"); //원피고구분 공통코드
        	this.gf_codeComListLoad("ds_ComCode03", "ds_hoz_sepcode", "N", "", "", "fn_callback", "F01"); //호증구분 공통코드
        	this.gf_codeComListLoad("ds_ComCode04", "ds_hozkind_sepcode", "N", "", "", "fn_callback", "F02"); //호증종류 공통코드
        }

        //소송관리번호 검색 버튼
        this.Div01_btn_search_onclick = function(obj,e)
        {
        	//this.ds_edoc_adm.clearData();
        	//this.ds_edoc_adm.appendData(this.ds_edoc_adm_eul);
        	//this.ds_edoc_adm.appendData(this.ds_edoc_adm_gap);
        	
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	var newChild = new ChildFrame;
        	
        	//modal창
        	newChild.init("Popup", "absolute", nLeft, nTop, 300, 250, null, null,
        					"out::OUT_lawsuit_adm_no.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame(), "", this, "modal_callback");
        }

        //modal_callback
        this.modal_callback = function(strId,variant)
        {
        	if(strId=="Popup")
        	{
        		var lawSearchNo = variant;
        		
        		if(this.gfn_IsNull(lawSearchNo) || lawSearchNo==0)	return false;
        		
        		lawsrcrlt = lawSearchNo.substring(0,10);	//소송관리번호
        		//instcdrlt = lawSearchNo.substring(10,13);	//심급차수
        		//trace("lawsrcrlt : " + lawsrcrlt);
        		//trace("instcdrlt : " + instcdrlt);
        		
        		if(!this.gfn_IsNull(lawsrcrlt))
        		{
        			this.btn_reg.set_visible(true);		
        			this.ds_search.setColumn(0,'lawsuitAdmNo',lawsrcrlt);
        			this.getLawsuitSelect();
        		}
        	}
        	else if(strId=="addFile")
        	{
        	
        	}
        }

        
        //소송기본정보 조회
        this.getLawsuitSelect = function()
        {
        	this.ds_lawsuit.clearData();
        	this.ds_edoc_adm_gap.clearData();
        	this.ds_edoc_adm_eul.clearData();
        	
        	var strSvcid = "getLawsuitSelect";
        	var strController = "/out/edoc_adm_lawsuitSelect.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search",
        						"ds_lawsuit=ds_output",
        						"",
        						"fn_callback");
        }

        //호증 정보 조회
        this.getEdocAdmInfo = function()
        {
        	var strSvcid = "getEdocAdmInfo";
        	var strController = "/out/edoc_adm_getInfo.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search",
        						"ds_edoc_adm_gap=ds_output1 ds_edoc_adm_eul=ds_output2",
        						"",
        						"fn_callback");
        						
        }

        
        //callBack
        this.fn_callback = function(sSvcId,errcd,errmsg)//errcd, errmsg는 어디서 받아오는가?
        {
        	switch(sSvcId)
        	{
        		case "getLawsuitSelect":
        			if(errcd < "0")
        			{
        				return alert("데이터 불러오기에 실패하였습니다." + errmsg);
        			}
        			else
        			{
        				var sepCode = this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitCpPladefSepcode");
        				if(sepCode != "001"){	
        					this.Div02.Static01.set_text("  원고");
        				}else{
        					this.Div02.Static01.set_text("  피고");
        				}
        				this.getEdocAdmInfo(); //호증정보 조회 ㄱㄱ
        			}
        			break;
        			
        		case "getEdocAdmInfo":
        			if(errcd < "0")
        			{
        				return alert("데이터 불러오기에 실패하였습니다." + errmsg);
        			}
        			else
        			{
        				if(	this.ds_edoc_adm_eul.rowcount < 1
        				&&	this.ds_edoc_adm_gap.rowcount < 1)	return alert("서증 데이터가 존재하지 않습니다.");	
        				
        				//this.ds_edoc_adm_gap.filter("edocAdmHozSepcode=='001'");
        				//this.ds_edoc_adm_gap.filter("edocAdmHozSepcode=='002'");
        			}
        			break;
        		
        		case "saveEdocAdm":
        			if(errcd < "0")
        			{
        				return alert("저장에 실패하였습니다." + errmsg);
        			}
        			else
        			{
        				//var edocno = this.ds_edoc_adm.getColumn(this.ds_edoc_adm.rowposition,"lawsuitAdmNo");
        				//this.ds_search.setColumn(0,'lawsuitAdmNo',edocno);
        				this.getLawsuitSelect();
        			}
        	}
        		
        }

        //초기화 버튼
        this.Div01_btn_clear_onclick = function(obj,e)
        {
        	this.reload();
        	//this.alert("초기화 완료");
        }

        
        //추가 버튼
        this.btn_reg_onclick = function(obj,e)
        {
        	var lawsuitAdmNo = this.ds_search.getColumn(0,'lawsuitAdmNo');	
        	
        	if(!this.gfn_IsNull(lawsuitAdmNo))
        	{
        		if(this.gfn_IsNull(this.Div03.edt_Hoz_No.value))	return alert("호증번호를 입력하세요");
        		if(this.gfn_IsNull(this.Div03.Edit00.value))		return alert("호증명칭을 입력하세요");
        		if(this.gfn_IsNull(this.Div03.cal_Writ_Date.value))	return alert("작성일을 입력하세요");
        		
        		var dsObj;
        		if(this.Div03.combo_hoz_sep.value == '001')			dsObj = this["ds_edoc_adm_gap"];
        		else if(this.Div03.combo_hoz_sep.value == '002')	dsObj = this["ds_edoc_adm_eul"];
        		else												return;
        		
        		//alert(combo_Hozkind_Sepcode.Value);
        		var nRow = dsObj.addRow();
        		
        		dsObj.setColumn(nRow, "lawsuitAdmNo"			, lawsuitAdmNo);	
        		dsObj.setColumn(nRow, "edocAdmHozSepcode"		, this.Div03.combo_hoz_sep.value);	
        		dsObj.setColumn(nRow, "edocAdmHozNo"			, this.Div03.edt_Hoz_No.value);
        		dsObj.setColumn(nRow, "edocAdmHozkindSepcode"	, this.Div03.combo_Hozkind_Sepcode.value);
        		dsObj.setColumn(nRow, "edocAdmName"				, this.Div03.Edit00.value);
        		dsObj.setColumn(nRow, "edocAdmWritDate"			, this.Div03.cal_Writ_Date.value);
        		
        		this.Div03.edt_Hoz_No.set_value('');
        		this.Div03.combo_hoz_sep.set_index(0);		
        		this.Div03.combo_Hozkind_Sepcode.set_index(0);
        		this.Div03.Edit00.set_value('');
        		this.Div03.cal_Writ_Date.set_value('');
        		
        	}
        	//그리드 reload
        	//this.ds_edoc_adm_gap.filter("edocAdmHozSepcode=='001'");
        	//this.ds_edoc_adm_eul.filter("edocAdmHozSepcode=='002'");	
        	
        	/*
        	var rec = this.confirm("호증을 추가하시겠습니까?");
        	
        	if(rec=="1")
        	{	
        		var lawsuitAdmNo = this.ds_lawsuit.getColumn(0,"lawsuitAdmNo");
        		var edocAdmHozSepcode = this.ds_edoc_adm.getColumn(0,"edocAdmHozSepcode");
        		var edocAdmHozNo = this.ds_edoc_adm.getColumn(0,"edocAdmHozNo");
        		var edocAdmHozkindSepcode = this.ds_edoc_adm.getColumn(0,"edocAdmHozkindSepcode");
        		var edocAdmName = this.ds_edoc_adm.getColumn(0,"edocAdmName");
        		var edocAdmWritDate = this.ds_edoc_adm.getColumn(0,"edocAdmWritDate");
        		trace("lawsuitAdmNo : "+lawsuitAdmNo);
        		trace(edocAdmHozSepcode);
        		
        		if(edocAdmHozSepcode == "001")
        		{
        			this.ds_edoc_adm_gap.insertRow(0);
        			this.ds_edoc_adm_gap.rowposition=0;
        			
        			this.ds_edoc_adm_gap.setColumn(0,"lawsuitAdmNo", lawsuitAdmNo);
        			this.ds_edoc_adm_gap.setColumn(0,"edocAdmHozSepcode", edocAdmHozSepcode);
        			this.ds_edoc_adm_gap.setColumn(0,"edocAdmHozNo", edocAdmHozNo);
        			this.ds_edoc_adm_gap.setColumn(0,"edocAdmHozkindSepcode", edocAdmHozkindSepcode);
        			this.ds_edoc_adm_gap.setColumn(0,"edocAdmName",edocAdmName);
        			this.ds_edoc_adm_gap.setColumn(0,"edocAdmWritDate",edocAdmWritDate);
        			trace("+++++++++++"+this.ds_edoc_adm_gap.getColumn(0,"lawsuitAdmNo"));
        			trace("+++++++++++++"+this.ds_edoc_adm_gap.getColumn(0,"edocAdmHozSepcode"));
        		}
        		else if(edocAdmHozSepcode == "002")
        		{
        			this.ds_edoc_adm_eul.insertRow(0);
        			this.ds_edoc_adm_eul.rowposition=0;
        			
        			this.ds_edoc_adm_eul.setColumn(0,"lawsuitAdmNo", lawsuitAdmNo);
        			this.ds_edoc_adm_eul.setColumn(0,"edocAdmHozSepcode", edocAdmHozSepcode);
        			this.ds_edoc_adm_eul.setColumn(0,"edocAdmHozNo", edocAdmHozNo);
        			this.ds_edoc_adm_eul.setColumn(0,"edocAdmHozkindSepcode", edocAdmHozkindSepcode);
        			this.ds_edoc_adm_eul.setColumn(0,"edocAdmName",edocAdmName);
        			this.ds_edoc_adm_eul.setColumn(0,"edocAdmWritDate",edocAdmWritDate);
        		}
        		
        		this.ds_edoc_adm.deleteRow();
        		this.ds_edoc_adm.addRow();
        	}
        	else
        	{
        		return false;
        	}
        	*/	
        }

        this.fnBtnDel = function (obj,e)
        {
        	var dsObj = this["ds_edoc_adm"+obj.id.replace("btn_del",'')];
        	
        	//항목없을시 리턴
        	if(dsObj.getRowCount() == 0)	return;
        	dsObj.deleteRow(dsObj.rowposition);
        	
        	//ds_edoc_adm_gap.FilterExpr="edocAdmHozSepcode=='001'";
        	//ds_edoc_adm_eul.FilterExpr="edocAdmHozSepcode=='002'";
        };

        /*
        //갑호증 삭제
        this.btn_del_gap_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	if(this.ds_edoc_adm_gap.getRowCount < 1)
        	{
        		this.alert("삭제할 호증이 없습니다.");
        		return false;
        	}
        	else if(this.ds_edoc_adm_gap.rowposition == -1)
        	{
        		this.alert("삭제할 호증을 선택해주세요.");
        		return false;
        	}
        	else
        	{
        		var yn = confirm("삭제하시겠습니까?");
        		if(yn == true)
        		{
        			this.alert("저장을 해야 정보가 반영됩니다.");
        			var nRow = this.ds_edoc_adm_gap.rowposition;
        			this.ds_edoc_adm_gap.deleteRow(nRow);
        		}
        		else
        		{
        			return false;
        		}
        	}
        }

        //을호증 삭제
        this.btn_del_eul_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	if(this.ds_edoc_adm_eul.getRowCount < 1)
        	{
        		this.alert("삭제할 호증이 없습니다.");
        		return false;
        	}
        	else if(this.ds_edoc_adm_eul.rowposition == -1)
        	{
        		this.alert("삭제할 호증을 선택해주세요.");
        		return false;
        	}
        	else
        	{
        		var yn = confirm("삭제하시겠습니까?");
        		if(yn == true)
        		{
        			this.alert("저장을 해야 정보가 반영됩니다.");
        			var nRow = this.ds_edoc_adm_eul.rowposition;
        			this.ds_edoc_adm_eul.deleteRow(nRow);
        		}
        		else
        		{
        			return false;
        		}
        	}
        }
        */

        
        //저장버튼 클릭
        this.btn_Save_onclick = function(obj,e)
        {
        	var lawsuitAdmNo = this.ds_search.getColumn(0,'lawsuitAdmNo');	
        	
        	if(this.gfn_IsNull(lawsuitAdmNo))	return alert("소송관리번호를 검색해주세요.");
        	
        	if(	!this.gfnDsChangeCheck(this.ds_edoc_adm_eul)
        	&&	!this.gfnDsChangeCheck(this.ds_edoc_adm_gap))
        	{
        		return alert("저장할 데이터가 없습니다.");
        	}	
        	
        	
        	this.Div03.edt_Hoz_No.set_value('');
        	this.Div03.combo_hoz_sep.set_index(0);		
        	this.Div03.combo_Hozkind_Sepcode.set_index(0);
        	this.Div03.Edit00.set_value('');
        	this.Div03.cal_Writ_Date.set_value('');
        		
        	this.sav_transaction("saveEdocAdm");
        	
        	/*
        	var rec = this.confirm("저장 하시겠습니까?");
        	
        	if(rec=="1")
        	{
        		this.sav_transaction("saveEdocAdm")
        	}
        	else
        	{
        		return false;
        	}
        	//this.alert("파일업로드 : " + this.Div03.FileUpload00.value);
        	*/
        }

        
        //호증정보 저장, 수정, 삭제
        this.sav_transaction = function(sSvcid)
        {
        	var strSvcid = sSvcid;
        	var strController = "/out/edoc_admCud.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search1=ds_edoc_adm_gap:U ds_search2=ds_edoc_adm_eul:U",
        						"",
        						"",
        						"fn_callback");
        }

        /*
        // 호등 dataset row 추가 버튼
        this.btn_create_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	this.ds_edoc_adm.addRow();
        }
        */

        // 닫기 버튼
        this.Button00_onclick = function(obj,e)
        {
        	this.gfnClose();
        }

        this.Div03_Static01_onclick = function(obj,e)
        {
        	
        }

        this.Div03_btn_fileAdd_onclick = function(obj,e)
        {
        	var dsObj = this.ds_search;
        	var lawsuitNo = dsObj.getColumn(dsObj.rowposition, 'lawsuitAdmNo');
        	
        	if(this.gfn_IsNull(lawsuitNo)){
        		alert("소송관리번호를 검색해주세요.");	
        		return;
        	}else{
        		var newChild = new ChildFrame;
        		newChild.init("addFile"
        						, "absolute", 10, 10, 300, 250, null, null
        						, "com::ADD_FILE.xfdl");
        						
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		
        		var chnScrn = '009';
        		var memAddFileSep = '서증';
        		var edocAdmSeq = "";
        		
        		/*
        		var sepCode = this.Div03.combo_hoz_sep.value;
        		
        		if(sepCode=='001')
        		{
        			edocAdmSeq = this.ds_edoc_adm_gap.getColumn(this.ds_edoc_adm_gap.rowposition,"edocAdmSeq");
        		}
        		else if(sepCode=='002')
        		{
        			edocAdmSeq = this.ds_edoc_adm_eul.getColumn(this.ds_edoc_adm_eul.rowposition,"edocAdmSeq");
        		}
        		
        		if(this.gfn_IsNull(edocAdmSeq))	edocAdmSeq='';
        		*/
        		
        		var BookNo = chnScrn
        					+ memAddFileSep
        					+ lawsuitNo
        					+ edocAdmSeq;
        					
        		
        		newChild.showModal(this.getOwnerFrame()
        							, 	{	
        									"BookNo":BookNo
        								}
        							, this
        							, "modal_callback");
        	}
        }

        this.grid_Gap_onsetfocus = function(obj,e)
        {
        	trace("set focus gap");
        	this.Grid0.selectRow(-1);
        }

        this.Grid0_onsetfocus = function(obj,e)
        {
        	trace("set focus eul");
        	this.grid_Gap.selectRow(-1);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.EDOC_ADM_onload, this);
            this.Div02.combo_CaseTyCode.addEventHandler("onitemchanged", this.Div02_Combo02_onitemchanged, this);
            this.Div02.combo_AplCortCode.addEventHandler("onitemchanged", this.Div02_Combo02_onitemchanged, this);
            this.btn_del_eul.addEventHandler("onclick", this.fnBtnDel, this);
            this.grid_Gap.addEventHandler("onsetfocus", this.grid_Gap_onsetfocus, this);
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.btn_del_gap.addEventHandler("onclick", this.fnBtnDel, this);
            this.Grid0.addEventHandler("onsetfocus", this.Grid0_onsetfocus, this);
            this.btn_reg.addEventHandler("onclick", this.btn_reg_onclick, this);
            this.Div01.btn_search.addEventHandler("onclick", this.Div01_btn_search_onclick, this);
            this.Div01.btn_clear.addEventHandler("onclick", this.Div01_btn_clear_onclick, this);
            this.btn_create.addEventHandler("onclick", this.btn_create_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Div03.Static01.addEventHandler("onclick", this.Div03_Static01_onclick, this);
            this.btn_fileAdd.addEventHandler("onclick", this.Div03_btn_fileAdd_onclick, this);

        };

        this.loadIncludeScript("OUT_edoc_adm.xfdl");

       
    };
}
)();
