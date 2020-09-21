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
                this.set_name("PRE_IWR001");
                this.set_classname("PRE_IWR001");
                this.set_titletext("준비서면관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_simCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cortCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_progCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_compCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">Y</Col><Col id=\"codenm\">완료</Col></Row><Row><Col id=\"codeno\">N</Col><Col id=\"codenm\">미완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_issuCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instAdm", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPetiSenddate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortReqidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcdate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcopin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCpOpin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVopcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVop\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmDivRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtrmgrDepuname\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRaisreqDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDelidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRegnChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPayDlindate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmWincRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCont\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmEntLyrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_preIwr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrDfsDeg\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrIssuSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrName\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrCont\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrCompWtr\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrOutLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_judgCode", this);
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDel\" type=\"STRING\" size=\"256\"/><Column id=\"addFileRegDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileChanDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_03", "absolute", "14", "263", "996", "189", null, null, this);
            obj.set_taborder("72");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "14", "501", "996", "159", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "151", "996", "61", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("65");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "10", "569", "24", "20", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_text("준비서면 관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("9");
            obj.set_text("  준비서면관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22", "70", "980", "25", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button_reload", "absolute", "941", "71", "55", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_sim", "absolute", "474", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_simCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");

            obj = new Static("Static01", "absolute", "354", "70", "115", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "289", "71", "55", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_lawsuitAdmNo", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "14", "122", "100", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("소송기본사항");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "22", "157", "980", "25", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "22", "181", "980", "25", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "20", "157", "115", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "354", "157", "115", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("소송진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "683", "157", "115", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("소제기일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "20", "181", "115", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "354", "181", "115", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("판사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "683", "181", "115", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("심급명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_progCode", "absolute", "474", "160", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("@ds_progCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_cortCode", "absolute", "140", "184", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@ds_cortCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("Calendar_date", "absolute", "803", "160", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("Edit_caseNum", "absolute", "140", "160", "140", "19", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "14", "232", "100", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("준비서면 목록");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "1.95%", "269", "984", "177", null, null, this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_preIwr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"52\"/><Column size=\"80\"/><Column size=\"156\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"변론차수\"/><Cell col=\"2\" text=\"쟁점사항\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성일\"/><Cell col=\"5\" text=\"완료여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:preIwrDfsDeg\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:preIwrIssuSepcode\" combodataset=\"ds_issuCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"3\" text=\"bind:preIwrName\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:preIwrWritDate\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:preIwrCompWtr\" combodataset=\"ds_compCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "14", "472", "121", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("준비서면 상세보기");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "22", "507", "980", "25", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "507", "115", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("준비서면제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_preIwrTitle", "absolute", "140", "510", "856", "19", null, null, this);
            obj.set_taborder("37");
            obj.set_maxlength("50");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "22", "531", "980", "74", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "20", "531", "115", "75", null, null, this);
            obj.set_taborder("39");
            obj.set_text("준비서면내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "22", "604", "980", "25", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "20", "604", "115", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("변론차수");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_chasoo", "absolute", "140", "608", "140", "18", null, null, this);
            obj.set_taborder("43");
            obj.set_maxlength("10");
            obj.set_inputtype("number");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "354", "604", "115", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("쟁점사항구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "679", "604", "115", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("완료여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_differ", "absolute", "474", "608", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_innerdataset("@ds_issuCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_comp", "absolute", "799", "608", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_innerdataset("@ds_compCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static41", "absolute", "27.54%", "607", "30", "25", null, null, this);
            obj.set_taborder("49");
            obj.set_text("차");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "22", "628", "980", "25", null, null, this);
            obj.set_taborder("50");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "20", "628", "115", "25", null, null, this);
            obj.set_taborder("51");
            obj.set_text("외부작성변호사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "354", "628", "115", "25", null, null, this);
            obj.set_taborder("52");
            obj.set_text("  첨부파일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "474", "630", "87", "25", null, null, this);
            obj.set_taborder("54");
            obj.set_text("현재 파일     개");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Button("Button_addFile", "absolute", "588", "630", "88", "23", null, null, this);
            obj.set_taborder("55");
            obj.set_text("파일 추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_del", "absolute", "955", "470", "55", "23", null, null, this);
            obj.set_taborder("56");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_addRow", "absolute", "895", "470", "55", "23", null, null, this);
            obj.set_taborder("57");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_save", "absolute", "895", "679", "55", "23", null, null, this);
            obj.set_taborder("58");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "955", "679", "55", "23", null, null, this);
            obj.set_taborder("59");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_judgId", "absolute", "474", "184", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("@ds_judgCode");
            obj.set_codecolumn("legalOfficialinfoRelaNo");
            obj.set_datacolumn("legalOfficialinfoLyrName");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_simName", "absolute", "803", "184", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_simCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_lawyer", "absolute", "140", "632", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("62");
            obj.set_innerdataset("@ds_lawyerCode");
            obj.set_codecolumn("legalOfficialinfoRelaNo");
            obj.set_datacolumn("legalOfficialinfoLyrName");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static14", "absolute", "-6.84%", "-25", null, "0", "96.88%", null, this);
            obj.set_taborder("63");
            obj.set_text("Static14");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "536", "632", null, "20", "474", null, this);
            obj.set_taborder("64");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static05", "absolute", "28", "508", "37", "23", null, null, this);
            obj.set_taborder("68");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "40", "606", "37", "23", null, null, this);
            obj.set_taborder("69");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "362", "606", "37", "23", null, null, this);
            obj.set_taborder("70");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "700", "606", "37", "23", null, null, this);
            obj.set_taborder("71");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("Txt_preIwrCont", "absolute", "139", "532", "858", "68", null, null, this);
            obj.set_taborder("73");
            obj.set_wordwrap("char");
            obj.set_maxlength("1500");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PRE_IWR001");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("준비서면관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit_caseNum","value","ds_instAdm","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Combo_judgId","value","ds_instAdm","instAdmJudId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Combo_simName","value","ds_instAdm","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Calendar_date","value","ds_instAdm","instAdmRaisreqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Combo_cortCode","value","ds_instAdm","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Combo_progCode","value","ds_instAdm","instAdmPrgrCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edit_lawsuitAdmNo","value","ds_instAdm","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Edit_preIwrTitle","value","ds_preIwr","preIwrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit_chasoo","value","ds_preIwr","preIwrDfsDeg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Combo_differ","value","ds_preIwr","preIwrIssuSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Combo_comp","value","ds_preIwr","preIwrCompWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Combo_lawyer","value","ds_preIwr","preIwrOutLyrid");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Combo_sim","visible","ds_instAdm","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Txt_preIwrCont","value","ds_preIwr","preIwrCont");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PRE_IWR001.xfdl", "Lib::common.xjs");
        this.registerScript("PRE_IWR001.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        //소송관리번호
        var lawsuitAdmNo="";
        //심급코드
        var instAdmCode="";
        //
        var preIwrNo="";

        
        this.PRE_IWR001_onload = function(obj,e)
        {
        	this.setCode();
        	
        }

        //코드 호출 함수
        this.setCode = function()
        {
        // 	this.gf_codeComListLoad("ds_prgrCode",  "ds_prgrCode",   "N", "", "", "fn_callback", "G02"); // 소송진행상태코드
        // 	this.gf_codeComListLoad("ds_sepCode",  "ds_sepCode",   "N", "", "", "fn_callback", "H02"); // 당사원피고코드
         	this.gf_codeComListLoad("ds_cortCode",  "ds_cortCode",   "N", "", "", "fn_callback", "A01");// 수행법원코드
         	this.gf_codeComListLoad("ds_progCode",  "ds_progCode",   "N", "", "", "fn_callback", "G02"); // 소송진행상태조회
         	this.gf_codeComListLoad("ds_issuCode",  "ds_issuCode",   "N", "", "", "fn_callback", "L01"); // 쟁점사항구분조회
         	this.getJudgName(); // 판사 이름 및 ID
         	this.getLawyerName(); // 변호사 이름 및 ID
        }

        //소송관리번호 검색
        this.Button_numSearch_onclick = function(obj,e)
        {

        	this.ds_instAdm.clearData();
        	this.ds_preIwr.clearData();
        	this.ds_search.clearData();
        	
        	 var lawSearchNo = "";	//소송관리번호 검색값
        	 
        	 //모달 창이 나올 좌표 값을 설정한다
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 //새로운 모달 창을 띄우기 위한 객체 선언
        	 var newChild = new ChildFrame;
        	 
        	 //새로운 플러그인(모달)을 생성한 후 초기화 시키는 메소드
        	 //매개변수 : '플러그인명', 좌표형태, 생성위치x좌표, 생성위치y좌표,
        	 //				sizeWidth, sizeHeight, 포지션 좌표x, 포지션 y좌표
        	 newChild.init("SearchModal"
        					, "absolute", nLeft, nTop, 400, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        	//showModal 함수를 호출 했을 때 ChildFrame을 띄울 위치를 지정하는 메소드
        	newChild.set_openalign("center middle");
        	//드래그로 이동 할 수 있는 영역 설정
        	newChild.set_dragmovetype("all");
        	//getOwnerFrame():현재 폼이 갖고 있는 프레임을 가져오는 메소드
        	//showModal매개변수 : ChildFrame의 ID, 부모프레임, 
        	//					모달로 띄운 ChildFrame에 추가될 변수리스트{변수명:변수값 , 변수명:변수값} 형식으로 입력,
        	//					opener가 될 Form 오브젝트(default : objParentFrame 에 속하는 Form 오브젝트)
        	//					모달이 닫힐 때 호출 될 콜백함수
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");	
        }

        //모달 콜백
        this.modal_callback = function(modalId,variable){
        	
        	if(modalId=="SearchModal"){
        		
        		//모달에서 검색을 실행하고 닫으면 변수에 소송관리번호+심급을 기록하도록 설계되어 있다.
        		//현재 필요한 내용은 소송관리번호와 심급 각각 따로 필요하기에 substr을 통하여 필요한 내용을 추출하도록 한다.
        		//심급의 내용이 없을 경우도 있기에 if문을 사용한다.
        		if(variable.length==13){
        			instAdmCode = variable.substr(10,3);
        		}
        		lawsuitAdmNo = variable.substr(0,10);
        		
        		trace(lawsuitAdmNo);
        		trace(instAdmCode);
        		
        		var newRow = this.ds_search.addRow();
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        		
        		
         		this.getSimInfo();
        		this.getInstAdmInfo();
        		
        		//this.getFileCount();
        	} else if(modalId=="SearchNo"){
        		if(this.gfn_IsNull(variable)==false){
        			this.g_nLawsuitNo = variable.substr(0,10);
        			
        // 			this.getSimInfo();
        // 			this.getInstAdmInfo();

        //			this.getFileCount();
        		}else{
        			return false;
        		}
        	}
        }

        
        //심급 조회
        this.getSimInfo = function(){
        	trace("======================심급조회======================");
        	this.gfn_transaction(this,
        			  "getSimInfo",
        			  "mediation/getSimInfo.do",
        			  "ds_search=ds_search",
        			  "ds_simCode=ds_sim",
        			  "",
        			  "fn_callback");
        }

        

        //심급 콤보박스 변화가 있을 시 재조회
        this.Combo_sim_onitemchanged = function(obj,e)
        {
        //alert(this.Combo_sim.value);
        	
        	var instAdmCode = this.Combo_sim.value;
        	if(this.Combo_sim.value == null){
        		instAdmCode = "001";
        	}
        	
        // 	alert("마설마 :: " + lawsuitAdmNo + " / " + instAdmCode);
        // 	trace("마설마 :: " + this.ds_instAdm.saveXML());
         	
        	
        	this.ds_instAdm.filter("instAdmCode=='"+ instAdmCode +"'");
        	this.ds_preIwr.filter("lawsuitAdmNo=='"+lawsuitAdmNo+"' && instAdmCode=='"+ instAdmCode +"'"); // && delYn=='N'");
        //	this.ds_simCode.filter("codeno=='"+obj.value+"'");
        	
        	this.ds_instAdm.set_rowposition(0);
        	this.ds_preIwr.set_rowposition(-1);
        	this.Static15.set_text("");
        	

        
        // 	instAdmCode = this.Combo_sim.value;
        // 	trace("@@@심급번호 : " + instAdmCode);
        // 	
        // 	this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        // 			
        // 	this.ds_instAdm.clearData();
        // 	this.ds_preIwr.clearData();
        // 	
        // 	this.getSimInfo();
        // 	this.getInstAdmInfo();

        // 	this.ds_instAdm.filter("instAdmCode=='"+obj.value+"'");
        // 	this.ds_preIwr.filter("lawsuitAdmNo=='"+lawsuitAdmNo+"' && instAdmCode=='"+obj.value+"' && delYn=='N'");
        // 	this.ds_simCode.filter("codeno=='"+obj.value+"'");
        // 	
        // 	this.ds_instAdm.set_rowposition(0);
        // 	this.ds_preIwr.set_rowposition(0);
        // 	this.getFileCount();

        }

        //TAB_INST_ADM
        this.getInstAdmInfo = function(){
        	trace("================getInstAdmInfo=======================");

        	this.gfn_transaction(this,
        			  "getInstAdm",
        			  "pre_iwr/getInstAdm.do",
        			  "ds_search=ds_search",
        			  "ds_instAdm=ds_instAdm",
        			  "",
        			  "fn_callback");			  
        }

        //TAB_PRE_IWR
        this.getPreIwrInfo = function(){
        	trace("================getPreIwrInfo=======================");

        	this.gfn_transaction(this,
        			  "getPreIwr",
        			  "pre_iwr/getPreIwr.do",
        			  "ds_search=ds_search",
        			  "ds_preIwr=ds_preIwr",
        			  "",
        			  "fn_callback");			  
        }

        
        //판사 이름 및 아이디 불러오기
        this.getJudgName = function(){
        	
        	trace("================getJudgName=======================");
        	this.gfn_transaction(this,
        		  "getJudgName",
        		  "pre_iwr/getJudgName.do",
        		  "ds_search=ds_search",
        		  "ds_judgCode=ds_judgCode",
        		  "",
        		  "fn_callback");
        }

        //변호사 이름 및 아이디 불러오기
        this.getLawyerName = function(){
        	
        	trace("================getLawyerName=======================");
        	this.gfn_transaction(this,
        		  "getLawyerName",
        		  "pre_iwr/getLawyerName.do",
        		  "ds_search=ds_search",
        		  "ds_lawyerCode=ds_lawyerCode",
        		  "",
        		  "fn_callback");
        }

        this.fn_callback = function(svcId,errcd,errmsg)
        {
        	trace("==========fn_callback==========" + svcId);
        	if(svcId == "getInstAdm"){
        		trace("==========svcId : "+svcId+"==========");
        		this.getPreIwrInfo();
        	}
        	else if (svcId == "getPreIwr"){
        		trace("==========svcId : "+svcId+"==========");
        		this.Combo_sim_onitemchanged("001");
        		/*this.getFileCount();*/
        	} else if (svcId == "getPreAddFile") {
        		trace("==========svcId : "+svcId+"==========");
        		trace("파일 :: " + this.ds_file.saveXML());
        		trace("파일 :: " + this.ds_file.rowcount);
        		this.Static15.set_text(this.ds_file.rowcount);
        	} else if (svcId == "getSimInfo") {
        		trace("==========svcId : "+svcId+"==========");
        		
        		this.Combo_sim.set_index(parseInt(instAdmCode)-1);
        	} else if (svcId == "savePre_iwr") {
        		alert("저장되었습니다.");
        		this.getSimInfo();
        		this.getInstAdmInfo();
        	}

        }

        //초기화
        this.Button_reload_onclick = function(obj,e)
        {
        	this.reload();
        	
        }

        //추가
        this.Button_addRow_onclick = function(obj,e)
        {
        	if(this.ds_instAdm.rowcount==0){
        		application.alert("추가하기 위한 데이터가 없습니다");
        		return false;
        	}
        	var addConfirm = application.confirm("준비서면 내역을 추가하시겠습니까?", "확인");
        	if(addConfirm){
        		this.ds_preIwr.addRow();	
        	}else{
        		return false;
        	}
        	
        }

        //삭제
        this.Button_del_onclick = function(obj,e)
        {
        	if(this.ds_instAdm.rowcount==0){
        		application.alert("검색 후 이용하세요");
        		return false;
        	}
        	var thisRow = this.ds_preIwr.rowposition;
        	var title = this.ds_preIwr.getColumn(thisRow, "preIwrName");
        	var delConfirm = application.confirm("제목 : "+title+"의 준비서면 내역을 삭제하시겠습니까??", "확인");
        	
        	if(delConfirm){
        		var thisRow = this.ds_preIwr.rowposition;
        		this.ds_preIwr.deleteRow(thisRow);
        		
        		var saveData = "lawsuitAdmNo="+this.ds_search.getColumn(0,"lawsuitAdmNo")+" instAdmCode="+this.ds_search.getColumn(0,"instAdmCode");
        		
        		this.gfn_transaction(this,
        			  "delPre_iwr",
        			  "pre_iwr/pre_iwrSave.do",
        			  "ds_preIwr=ds_preIwr:U",
        			  "",
        			  saveData,
        			  "fn_callback");		
        	}
        }

        //저장버튼
        this.Button_save_onclick = function(obj,e)
        {
        	if(this.ds_instAdm.rowcount==0){
        		application.alert("검색 후 이용하세요");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_preIwrTitle.text)) {
        		alert("준비서면 제목을 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_chasoo.text)) {
        		alert("변론차수를 작성해주세요.");
        		return;	
        	} else if(this.gfn_IsNull(this.Combo_differ.value)) {
        		alert("쟁점사항을 체크해주세요.");
        		return;	
        	} else if(this.gfn_IsNull(this.Combo_comp.value)) {
        		alert("완료여부를 체크해주세요.");
        		return;	
        	}
        	
        	this.ds_preIwr.setColumn(this.ds_preIwr.rowposition, "preIwrOutLyrid", this.Combo_lawyer.value);
        	var saveData = "lawsuitAdmNo="+this.ds_search.getColumn(0,"lawsuitAdmNo")+" instAdmCode="+this.ds_search.getColumn(0,"instAdmCode");
        	this.gfn_transaction(this,
        		  "savePre_iwr",
        		  "pre_iwr/pre_iwrSave.do",
        		  "ds_preIwr=ds_preIwr:U",
        		  "",
        		  saveData,
        		  "fn_callback");	
        }

        //닫기버튼
        this.Button_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.Button_addFile_onclick = function(obj,e)
        {
        	if(this.edit_lawsuitAdmNo.text == "") {
        		alert("먼저 소송관리번호를 조회해주세요.");
        		return;
        	} else if(this.ds_preIwr.getRowCount() < 1 || this.ds_preIwr.rowposition < 0) {
        		alert("먼저 신규추가 후 첨부해주세요.");
        		return;
        	} else {
        		var chnScrn = '008';
        		var memAddFileSep = '준비서면';
        		var memAddFileNo = this.edit_lawsuitAdmNo.text;
        		var memAddFileSimNo = this.Combo_sim.value;
        		var preIwrNo = "";

        		if(this.ds_preIwr.getColumn(this.ds_preIwr.rowposition,"preIwrNo") != null){
        			preIwrNo = this.ds_preIwr.getColumn(this.ds_preIwr.rowposition, "preIwrNo");
        		}else {
        			var preIwrSeqNo1 = this.ds_preIwr.rowcount;
        			preIwrNo = preIwrSeqNo1;
        			
        // 			var edocAdmSeq1 = this.ds_edoc_gab.getColumn(this.ds_edoc_gab.rowposition,"edocSeq");
        // 			var edocAdmSeq2 = this.ds_edoc_eul.getColumn(this.ds_edoc_eul.rowposition,"edocSeq");
        // 			
        // 			if(edocAdmSeq1 == null) {
        // 				edocAdmSeq1 = "";
        // 			}
        // 			if(edocAdmSeq2 == null) {
        // 				edocAdmSeq2 = "";
        // 			}
        // 			edocAdmSeq = edocAdmSeq1 + "" + edocAdmSeq2;
        			//trace("::::::::"+edocAdmSeq+"::::::::edocAdmSeq::::::::else ");
        		}
        		var BookNo = chnScrn
        					+ memAddFileSep
        					+ memAddFileNo
        					+ memAddFileSimNo
        					+ preIwrNo;
        // 		alert("edocAdmSeq >> " + edocAdmSeq);
        // 		alert(this.ds_preIwr.saveXML());

        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		
        		var newChild = new ChildFrame;
        		newChild.init("SearchNo"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "com::ADD_FILE.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame()
        							, {BookNo:BookNo, chnScrn:chnScrn}
        							, this
        							, "modal_callback");
        		
        		
        		//getFileCount();
        	}
        }

        
        // 관련파일 개수
        this.getFileCount = function(){
        	
        	//this.ds_file.clearData();
        	
        	//var memAddFileNo = this.edit_lawsuitAdmNo.text;
        	var memAddFileNo = this.ds_instAdm.getColumn(this.ds_instAdm.rowposition, "lawsuitAdmNo");
        	var memAddFileSimNo = this.Combo_sim.value;
        	var preIwrNo = this.ds_preIwr.getColumn(this.ds_preIwr.rowposition, "preIwrNo");
        	var strParam ="";
        	
        	strParam += "lawsuit_adm_no=" + "\"" + memAddFileNo + "\"";	
        	strParam += " inst_adm_Code=" + "\"" + memAddFileSimNo + "\"";
        	strParam += " pre_iwr_no=" + "\"" + preIwrNo + "\"";

        	//this.ds_search.clearData();
        	this.ds_search.setColumn(0, "lawsuitAdmNo", memAddFileNo);
        	this.ds_search.setColumn(0, "instAdmCode", memAddFileSimNo);
        	this.ds_search.setColumn(0, "preIwrNo", preIwrNo);
        //	alert(this.ds_preIwr.rowposition);
        //  	alert(strParam);
        //  	alert(this.ds_search.saveXML());

        	this.transaction("getPreAddFile"
        				,"svcurl::common/getPreAddFile.do"
        				,"ds_input=ds_search"
        				,"ds_file=ds_output"
        				,strParam
        				,"fn_callback"
        				); 
        }
        this.Grid01_onselectchanged = function(obj,e)
        {
        	

        //	this.ds_instAdm.filter("instAdmCode=='"+obj.value+"'");
        // 	alert(lawsuitAdmNo + " / " + obj.value);
        // 	this.ds_preIwr.filter("lawsuitAdmNo=='"+lawsuitAdmNo+"' && instAdmCode=='"+obj.value+"'"); // && delYn=='N'");
        // //	this.ds_simCode.filter("codeno=='"+obj.value+"'");
        // 	
        // //	this.ds_instAdm.set_rowposition(0);
        // 	this.ds_preIwr.set_rowposition(0);
         	this.getFileCount();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PRE_IWR001_onload, this);
            this.Button_reload.addEventHandler("onclick", this.Button_reload_onclick, this);
            this.Combo_sim.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Combo_progCode.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Combo_cortCode.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Grid01.addEventHandler("onselectchanged", this.Grid01_onselectchanged, this);
            this.Button_addFile.addEventHandler("onclick", this.Button_addFile_onclick, this);
            this.Button_del.addEventHandler("onclick", this.Button_del_onclick, this);
            this.Button_addRow.addEventHandler("onclick", this.Button_addRow_onclick, this);
            this.Button_save.addEventHandler("onclick", this.Button_save_onclick, this);
            this.Button_close.addEventHandler("onclick", this.Button_close_onclick, this);
            this.Combo_judgId.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Combo_simName.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);

        };

        this.loadIncludeScript("PRE_IWR001.xfdl");

       
    };
}
)();
