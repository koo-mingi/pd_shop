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
                this.set_name("Preiwr_form");
                this.set_classname("OUT_fixinfo_skw");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_font("9 굴림체");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("fup_input", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelNum\" type=\"STRING\" size=\"256\"/><Column id=\"addFileCode\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDownCount\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDel\" type=\"STRING\" size=\"256\"/><Column id=\"addFileRegDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileChanDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileCheck\" type=\"STRING\" size=\"256\"/><Column id=\"addFileAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_com", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">선택</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_top2", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuit_adm_no\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_code\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit_api_case_code\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_prgr_code\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_raisreq_date\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_cort_code\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_jud_id\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("pre_iwrList", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRaisreqDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmEntLyrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sim", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_courthouse", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_issue", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_top", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuit_adm_no\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_code\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit_api_case_code\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_prgr_code\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_raisreq_date\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_cort_code\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_jud_id\" type=\"STRING\" size=\"256\"/><Column id=\"inst_adm_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bottom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrCont\" type=\"STRING\" size=\"2000\"/><Column id=\"preIwrDfsDeg\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrIssuSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrName\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrWritDate\" type=\"DATE\" size=\"256\"/><Column id=\"preIwrCompWtr\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrOutLyrname\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrOutLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrOutLyrid\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_addFile", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDel\" type=\"STRING\" size=\"256\"/><Column id=\"addFileRegDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileChanDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file_add", this);
            obj._setContents("<ColumnInfo><Column id=\"addFileRelSeq\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFile\" type=\"STRING\" size=\"256\"/><Column id=\"addFilePcFileExt\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerPath\" type=\"STRING\" size=\"256\"/><Column id=\"addFileSerFileName\" type=\"STRING\" size=\"256\"/><Column id=\"addFileDel\" type=\"STRING\" size=\"256\"/><Column id=\"addFileRegDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileChanDate\" type=\"STRING\" size=\"256\"/><Column id=\"addFileAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"preAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"preIwrNo\" type=\"STRING\" size=\"256\"/><Column id=\"edocAddFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"edocAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sim00", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sim01", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view02", "absolute", "14", "270", "996", "209", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view03", "absolute", "14", "499", "996", "135", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "144", "996", "85", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  준비서면");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "19", "70", "985", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Edit("lawsuit_no", "absolute", "119", "2", "140", "19", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("btn_pre_iwr", "absolute", "264", "0", "55", "23", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("combo_Instance", "absolute", "444", "2", "140", "19", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_sim");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");
            obj = new Button("btn_Clean", "absolute", "924", "0", "55", "23", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "19", "149", "984", "75", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            this.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "50", "49", null, "26", "0", null, this.Div02);
            obj.set_taborder("19");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "47", "24", null, "26", "0", null, this.Div02);
            obj.set_taborder("18");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "39", "0", null, "26", "0", null, this.Div02);
            obj.set_taborder("17");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "49", "115", "26", null, null, this.Div02);
            obj.set_taborder("1");
            obj.set_text("심급명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "325", "25", "115", "25", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("소제기일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "24", "115", "26", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "665", "0", "115", "26", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("판사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit2", "absolute", "120", "3", "140", "19", null, null, this.Div02);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo6", "absolute", "120", "28", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_courthouse");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Combo("Combo1", "absolute", "445", "3", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_lawsuit");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Edit("Edit0", "absolute", null, "53", "861", "19", "3", null, this.Div02);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit6", "absolute", "785", "3", "140", "19", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Calendar("cal_EvidocuDate", "absolute", "445", "28", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Static("Static00", "absolute", "0", "0", "115", "26", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "325", "0", "115", "26", null, null, this.Div02);
            obj.set_taborder("3");
            obj.set_text("소송진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "19", "504", "984", "125", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            this.addChild(obj.name, obj);
            obj = new Static("sta_03", "absolute", "47", "100", null, "25", "0", null, this.Div03);
            obj.set_taborder("23");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "47", "75", null, "26", "0", null, this.Div03);
            obj.set_taborder("22");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "55", "25", null, "51", "0", null, this.Div03);
            obj.set_taborder("21");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "47", "0", null, "26", "0", null, this.Div03);
            obj.set_taborder("20");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "310", "75", "115", "26", null, null, this.Div03);
            obj.set_taborder("4");
            obj.set_text("쟁점사항구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "310", "100", "115", "25", null, null, this.Div03);
            obj.set_taborder("5");
            obj.set_text("외부작성변호사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "595", "75", "115", "26", null, null, this.Div03);
            obj.set_taborder("6");
            obj.set_text("완료여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("tx_preiwr_name", "absolute", "120", "3", "858", "19", null, null, this.Div03);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_maxlength("100");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div03.addChild(obj.name, obj);
            obj = new TextArea("TextArea0", "absolute", "120", "29", "858", "44", null, null, this.Div03);
            obj.set_taborder("8");
            obj.set_maxlength("500");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("Combo3", "absolute", "430", "78", "140", "19", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@ds_issue");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj = new Combo("Combo4", "absolute", "715", "79", "130", "19", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_com");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj = new Edit("Edit4", "absolute", "430", "103", "140", "19", null, null, this.Div03);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("combo_Instance", "absolute", "120", "78", "140", "19", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_sim01");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_readonly("false");
            obj = new Static("Static03", "absolute", "0", "100", "115", "25", null, null, this.Div03);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "75", "115", "26", null, null, this.Div03);
            obj.set_taborder("2");
            obj.set_text("변론차수");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "25", "115", "51", null, null, this.Div03);
            obj.set_taborder("1");
            obj.set_text("준비서면내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "115", "26", null, null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("준비서면제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("btn_fileAdd", "absolute", "244", "102", "60", "20", null, null, this.Div03);
            obj.set_taborder("25");
            obj.set_text("첨부파일");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("subTitle_00", "absolute", "14", "122", "996", "15", null, null, this);
            obj.set_taborder("4");
            obj.set_text("준비서면 기본사항");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_01", "absolute", "14", "247", null, "15", "879", null, this);
            obj.set_taborder("5");
            obj.set_text("준비서면목록");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "895", "242", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_0", "absolute", "21", "277", "982", "195", null, null, this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_bottom");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"153\"/><Column size=\"156\"/><Column size=\"189\"/><Column size=\"169\"/><Column size=\"145\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"변론차수\"/><Cell col=\"2\" text=\"쟁점사항구분\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"완료\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:preIwrDfsDeg\" combodataset=\"ds_sim\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:preIwrIssuSepcode\" combodataset=\"ds_issue\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"3\" text=\"bind:preIwrName\"/><Cell col=\"4\" text=\"bind:preIwrWritDate\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:preIwrCompWtr\" combodataset=\"ds_com\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preiwr_delete", "absolute", "955", "242", "55", "23", null, null, this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", "895", "646", "55", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00", "absolute", "954", "646", "55", "23", null, null, this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "19", "70", "115", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "344", "70", "115", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("fileCount", "absolute", "127", "606", "130", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "28", "506", "37", "23", null, null, this);
            obj.set_taborder("21");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "41", "581", "37", "23", null, null, this);
            obj.set_taborder("22");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "636", "582", "37", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static03", "absolute", "337", "582", "37", "23", null, null, this);
            obj.set_taborder("24");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1011, 49, this.DivTitle,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  준비서면");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 dotum");

            	}
            );
            this.DivTitle.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 985, 25, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#f0f0f0ff");
            		p.style.set_border("1 solid #a8a8a8ff");
            		p.set_scrollbars("none");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 984, 75, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eaeaeaff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 984, 125, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#eaeaeaff");

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
            obj = new BindItem("item0","Div01.lawsuit_no","value","pre_iwrList","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div02.Edit2","value","pre_iwrList","instAdmCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div02.Combo1","value","pre_iwrList","instAdmPrgrCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div02.Edit6","value","pre_iwrList","instAdmJudName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div02.Combo6","value","pre_iwrList","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div02.cal_EvidocuDate","value","pre_iwrList","instAdmRaisreqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div02.Edit0","value","pre_iwrList","instAdmName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div03.tx_preiwr_name","value","ds_bottom","preIwrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div03.TextArea0","value","ds_bottom","preIwrCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div03.Combo3","value","ds_bottom","preIwrIssuSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div03.Combo4","value","ds_bottom","preIwrCompWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div03.Edit4","value","ds_bottom","preIwrOutLyrname");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div03.combo_Instance","value","ds_bottom","preIwrDfsDeg");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OUT_PRE_ENT_IWR.xfdl", "Lib::common.xjs");
        this.registerScript("OUT_PRE_ENT_IWR.xfdl", function() {
        //include "Lib::common.xjs";

        var gbcode = "";
        var	lawsrcrlt = "";		//소송관리번호
        var instcdrlt = "";		//심급코드
        var lyrid = '';

        //onload
        this.Preiwr_form_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	this.fileCount.set_text("현 파일개수 0");
        	this.gf_codeComListLoad("ds_lawsuit"	, "ds_lawsuit"		, "N", "", "", "fnCallback", "G02");
        	this.gf_codeComListLoad("ds_sim"		, "ds_sim"			, "N", "", "", "fnCallback", "G01");
        	this.gf_codeComListLoad("ds_courthouse"	, "ds_courthouse"	, "N", "", "", "fnCallback", "A01"); //수행법원조회
        	this.gf_codeComListLoad("ds_issue"		, "ds_issue"		, "N", "", "", "fnCallback", "L01");
        }

        
        //소송 List 조회
        this.Div01_btn_pre_iwr_onclick = function(obj,e)
        {	
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);	
        	var newChild = new ChildFrame;
        	
        	//모달팝업창 불러옴
        	newChild.init("Popup", "absolute", nLeft, nTop, 300, 250, null, null,
        					"out::OUT_lawsuit_adm_no.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame(), "", this, "modal_callback");
        }

        //모달창 callback
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Popup")
        	{
        		var lawSearchNo = variant; //variant : modal창 닫힐때 반환값
        		
        		if(this.gfn_IsNull(lawSearchNo) || lawSearchNo == 0) 
        		{
        			return false;
        		}
        		
        		lawsrcrlt='';
        		instcdrlt='';
        		
        		lawsrcrlt = lawSearchNo.substring(0,10); 	//소송관리번호
        		
        		if(lawSearchNo.length == 13){
        			instcdrlt = lawSearchNo.substring(10,13); 	//심급코드
        		}
        		lyrid  = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        		this.fnSetLawsuitAdmNo();
        	}
        	else if(strID == "addFile")
        	{
        		//var rtnObj = JSON.parse(variant);
        		//this.fileCount.set_text("현 파일개수 "+rtnObj.rowCnt);
        		this.fnGetFileCnt();
        	}
        }

        

        this.fnSetLawsuitAdmNo = function ()
        {
        	this.ds_sim.copyData(this.ds_sim00);
        	this.pre_iwrList.filter("");
        	this.ds_bottom.filter("");
        		
        	
        	this.ds_bottom.clearData();
        	this.pre_iwrList.clearData();
        	this.ds_bottom.addRow();
        	
        	this.ds_search.setColumn(0, "lawsuitAdmNo", lawsrcrlt);
        	this.ds_search.setColumn(0, "instAdmCode", instcdrlt);
        	this.ds_search.setColumn(0, "preIwrOutLyrid", lyrid);
        	
        	this.getInstSearch();
        };

        

        //심급 변경시 준비서면목록 변환
        this.combo_Instance_onitemchanged = function(obj,e)
        {
        	this.pre_iwrList.filter("instAdmCode=='"+obj.value+"'");
        	this.ds_bottom.filter("lawsuitAdmNo=='"+lawsrcrlt+"' && instAdmCode=='"+obj.value+"' && delYn=='N'");
        	this.ds_sim01.filter("codeno=='"+obj.value+"'");
        	
        	
        	this.pre_iwrList.set_rowposition(0);
        	this.ds_bottom.set_rowposition(0);
        	this.fnGetFileCnt();
        }

        
        // 심급 정보 조회
        this.getInstSearch = function()
        {
        	var strSvcid = "InstanceSearch";
        	var strController = "/out/pre_iwrSelect.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search",
        						"pre_iwrList=ds_output",
        						"",
        						"fnCallback");
        }

        
        // 준비서면 조회
        this.getPreIwrSearch = function()
        {
        	var strSvcid = "getPreIwrSearch";
        	var strController = "/out/get_pre_iwr.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search",
        						"ds_bottom=ds_output",
        						"",
        						"fnCallback");
        }

        this.fnGetFileCnt = function ()
        {
        		var memAddFileSep = '준비서면';
        		var memAddFileNo = this.pre_iwrList.getColumn(this.pre_iwrList.rowposition, 'lawsuitAdmNo');
        		var memAddFileSimNo = this.Div01.combo_Instance.value;
        		var preIwrNo = this.ds_bottom.getColumn(this.ds_bottom.rowposition, "preIwrNo");		
        		var addFileAdmName1 = memAddFileSep + "_" + memAddFileNo;
        		var cnt = this.ds_bottom.getRowCount();
        		
        		if((cnt < 1))	return this.fileCount.set_text("현 파일개수 0");
        		if(this.gfn_IsNull(preIwrNo))	preIwrNo = this.ds_bottom.getCountNF()+1;
        		
        		this.ds_addFile.clearData();
        		var nRow = this.ds_addFile.addRow();
        		this.ds_addFile.setColumn(nRow, "lawsuitAdmNo",memAddFileNo);
        		this.ds_addFile.setColumn(nRow, "instAdmCode",memAddFileSimNo);
        		this.ds_addFile.setColumn(nRow, "preIwrNo",preIwrNo);
        		this.ds_addFile.setColumn(nRow, "addFileAdmName",addFileAdmName1);
        		
        		this.listViewPre();
        };

        this.listViewPre = function()
        {	
        	//trace("준비서면 select input check :: "+this.ds_addFile.saveXML());
        	this.gfn_transaction(this,
        						"getPreAddFile",
        						"common/getPreAddFile.do",
        						"ds_input=ds_addFile",
        						"ds_file_add=ds_output",
        						"",
        						"fnCallback"
        						);
        };

        //gbcode check
        this.gbcode_check = function()
        {
        	if(gbcode=="insert")
        	{
        		if(!this.confirm("저장하시겠습니까?"))
        		{
        			return false;
        		}
        		else
        		{
        			this.alert("저장 버튼을 눌러주세요.");
        			return false;
        		}
        	}
        	return true;
        }

        //Callback 함수
        this.fnCallback = function(svcid,errcd,errmsg)
        {
        	switch(svcid)
        	{		
        		case "ds_sim":
        			this.ds_sim00.copyData(this.ds_sim);
        			break;
        		case "InstanceSearch":
        				if(errcd < 0){			
        					alert("리스트 불러오기에 실패하였습니다." + errmsg);
        				}
        				
        				if(this.pre_iwrList.getRowCount() ==0)
        				{	
        					for(var i=10; i>0 ; i--){
        						this.ds_sim.deleteRow(i);						
        					}		
        				}
        				else
        				{				
        					var instanceLevel = this.pre_iwrList.getRowCount() - 1;
        					for(var i=10; i>instanceLevel ; i--){
        						this.ds_sim.deleteRow(i);
        					}
        				}	
        				
        				this.ds_sim01.copyData(this.ds_sim);
        				this.Div01.combo_Instance.set_value(instcdrlt);
        				this.combo_Instance_onitemchanged(this.Div01.combo_Instance,{});
        				
        				this.getPreIwrSearch();
        			break;
        		case "getPreIwrSearch":
        			if(errcd < 0){			
        				alert("리스트 불러오기에 실패하였습니다." + errmsg);
        			}
        			this.Div01.combo_Instance.set_value(instcdrlt);
        			this.combo_Instance_onitemchanged(this.Div01.combo_Instance,{});
        			//this.ds_bottom.filter("lawsuitAdmNo=='"+lawsrcrlt+"' && instAdmCode=='"+instcdrlt+"' && delYn=='N'");
        			//this.fnGetFileCnt();
        			break;
        		case "preiwrDelete":
        			if(errcd < 0)	return alert("삭제에 실패하였습니다." + errmsg);			
        			alert("삭제되었습니다.");
        			this.getPreIwrSearch();
        			break;
        		case "preiwrUpdate":
        			if(errcd < 0)	return alert("변경에 실패하였습니다." + errmsg);			
        			alert("변경후저장되었습니다.");
        			this.getPreIwrSearch();
        			break;			
        		case "preiwrInsert":
        			if(errcd < 0)	return alert("저장에 실패하였습니다." + errmsg);	
        			
        			alert("신규추가되었습니다.");
        			this.getPreIwrSearch();
        			
        			break;
        		case "getPreAddFile":
        			var rowCnt = this.ds_file_add.getRowCount();
        			this.fileCount.set_text("현 파일개수 "+rowCnt);
        			break;
        	}
        }

        //초기화 버튼 event
        this.Div01_btn_Clean_onclick = function(obj,e)
        {
        	this.pre_iwrList.clearData();
        	this.ds_bottom.clearData();
        }

        //신규 버튼 event
        this.btn_del_onclick = function(obj,e)
        {
        	if(this.pre_iwrList.getRowCount() == 0){
        		alert("기본사항 정보가 조회되지 않았습니다.");
        	}else{
        		var row = this.ds_bottom.addRow();
        		this.fnSetDetailNew(row);
        	}
        	
        }

        this.fnSetDetailNew = function (row)
        {	
        	//this.Div03.tx_preiwr_name.set_enable(true);
        	var LawsuitAdmNo = nexacro.trim(this.Div01.lawsuit_no.value);
        	
        	this.ds_bottom.setColumn(row, "lawsuitAdmNo", LawsuitAdmNo); 	//소송관리번호
        	this.ds_bottom.setColumn(row, "instAdmCode", this.Div01.combo_Instance.value); 	//심급차수
        	this.ds_bottom.setColumn(row, "preIwrDfsDeg", this.Div03.combo_Instance.value); //변론차수
        	this.ds_bottom.setColumn(row, "preIwrName",""); 				//제목
        	this.ds_bottom.setColumn(row, "preIwrCont","");				//내용
        	this.ds_bottom.setColumn(row, "preIwrIssuSepcode",this.Div03.Combo3.value); //쟁점사항구분
        	this.Div03.Combo4.set_index(1);
        	this.ds_bottom.setColumn(row, "preIwrCompWtr",this.Div03.Combo4.value); //완료여부
        	this.ds_bottom.setColumn(row, "preIwrOutLyrid",lyrid); 		//위임변호사
        };

        this.fnSavevalidation = function ()
        {
        	if(this.gfn_IsNull(this.Div03.tx_preiwr_name.text))
        	{
        		alert("제목은 필수입력입니다.");
        		this.Div03.tx_preiwr_name.setFocus();
        		return false;
        	}
        	else if(this.gfn_IsNull(this.Div03.combo_Instance.value))
        	{
        		alert("변론차수는 필수입력입니다.");
        		this.Div03.combo_Instance.setFocus();
        		return false;
        	}
        	else if(this.gfn_IsNull(this.Div03.Combo3.value))
        	{
        		alert("쟁점사항구분은 필수입력입니다.");
        		this.Div03.Combo3.setFocus();
        		return false;
        	}
        	else if(this.gfn_IsNull(this.Div03.Combo4.value))
        	{
        		alert("완료여부는 필수입력입니다.");
        		this.Div03.Combo4.setFocus();
        		return false;
        	}
        	
        	return true;
        };

        //저장 버튼 event
        this.btn_Save_onclick = function(obj,e)
        {
        	//저장할 데이터 여부 확인
        	if(this.gfn_IsNull(this.Div01.lawsuit_no.value))	return alert("소송관리번호를 검색해주세요.");
        	else if(!this.gfnDsChangeCheck(this.ds_bottom))		return alert("저장할 데이터가 없습니다.");
        	
        	if(!this.fnSavevalidation())						return;
        	
        	this.fnPreiwrAllSave();
        	
        }

        //삭제 버튼 event
        this.btn_preiwr_delete_onclick = function(obj,e)
        {
        	this.fnDeletepreiwrDetail();
        }

        this.fnDeletepreiwrDetail = function ()
        {
        	var cRow = this.ds_bottom.rowposition;
        	
        	if(this.ds_bottom.rowcount == 0)	return alert("삭제할 데이터가 없습니다.");
        	
            if(this.ds_bottom.getRowType(cRow) == Dataset.ROWTYPE_INSERT){
        		this.ds_bottom.deleteRow(cRow);
            }else{
        		this.ds_bottom.deleteRow(cRow);
        		this.fnPreiwrAllSave();
            }
            
        };

        this.fnPreiwrAllSave = function ()
        {
        	var strSvcid = '';
        	var cnt = this.ds_bottom.rowcount;
        	var strController = "/out/pre_iwrCud.do";
        	
        	for(var i=0 ; i<cnt; i++){
        		var type = this.ds_bottom.getRowType(i);
        		
        		if(type == Dataset.ROWTYPE_INSERT){
        			strSvcid = "preiwrInsert";
        		}else if(type == Dataset.ROWTYPE_UPDATE){
        			strSvcid = "preiwrUpdate";
        		}
        	}
        	
        	if(strSvcid == ""){
        		strSvcid = "preiwrDelete";
        	}
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_bottom:U ds_file=ds_file:U",
        						"",
        						"",
        						"fnCallback");
        };

        //닫기 버튼
        this.Button00_onclick = function(obj,e)
        {
        	var cnt = this.ds_bottom.rowcount;
        	
        	for(var i=0; i<cnt; i++){
        		type = this.ds_bottom.getRowType(i);
        		
        		if(type==Dataset.ROWTYPE_INSERT || type==Dataset.ROWTYPE_UPDATE){
        			var rtn = confirm("변경된 자료가 있습니다. 그래도 종료하시겠습니까?");
        			
        			if(rtn == true){
        				this.gfnClose();
        			}else{
        				return false;
        			}
        		}	
        	}	
        	this.gfnClose();
        }

        this.Div03_btn_fileAdd_onclick = function(obj,e)
        {
        	var dsObj = this.pre_iwrList;
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
        		
        		
        		var chnScrn = '008';
        		var memAddFileSep = '준비서면';
        		var memAddFileSimNo = this.Div01.combo_Instance.value;
        		var preIwrNo = this.ds_bottom.getColumn(this.ds_bottom.rowposition, "preIwrNo");
        		
        		if(this.gfn_IsNull(preIwrNo))	preIwrNo = this.ds_bottom.getCountNF()+1;
        		
        		var BookNo = chnScrn
        					+ memAddFileSep
        					+ lawsuitNo
        					+ memAddFileSimNo 
        					+ preIwrNo;
        					
        		
        		newChild.showModal(this.getOwnerFrame()
        							, 	{	
        									"BookNo":BookNo
        								}
        							, this
        							, "modal_callback");
        	}
        }

        this.ds_bottom_onrowposchanged = function(obj,e)
        {
        	this.fnGetFileCnt();
        	this.fnSetTitleEnable(obj,e);
        }

        this.fnSetTitleEnable = function(obj,e)
        {
        	if(obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT)
        	{
        		this.Div03.tx_preiwr_name.set_enable(true);
        	}
        	else
        	{
        		this.Div03.tx_preiwr_name.set_enable(false);
        	}
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bottom.addEventHandler("onrowposchanged", this.ds_bottom_onrowposchanged, this);
            this.addEventHandler("onload", this.Preiwr_form_onload, this);
            this.Div01.lawsuit_no.addEventHandler("oneditclick", this.Div01_lawsuit_no_oneditclick, this);
            this.Div01.btn_pre_iwr.addEventHandler("onclick", this.Div01_btn_pre_iwr_onclick, this);
            this.Div01.combo_Instance.addEventHandler("onitemchanged", this.combo_Instance_onitemchanged, this);
            this.Div01.btn_Clean.addEventHandler("onclick", this.Div01_btn_Clean_onclick, this);
            this.Div02.Combo1.addEventHandler("onitemchanged", this.Div02_Combo02_onitemchanged, this);
            this.Div02.Edit6.addEventHandler("oneditclick", this.Div02_Edit6_oneditclick, this);
            this.Div03.Static04.addEventHandler("onclick", this.Div03_Static02_onclick, this);
            this.Div03.Static05.addEventHandler("onclick", this.Div03_Static02_onclick, this);
            this.Div03.Static06.addEventHandler("onclick", this.Div03_Static02_onclick, this);
            this.Div03.TextArea0.addEventHandler("oneditclick", this.Div03_TextArea0_oneditclick, this);
            this.Div03.Static03.addEventHandler("onclick", this.Div03_Static02_onclick, this);
            this.Div03.Static02.addEventHandler("onclick", this.Div03_Static02_onclick, this);
            this.Div03.btn_fileAdd.addEventHandler("onclick", this.Div03_btn_fileAdd_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_preiwr_delete.addEventHandler("onclick", this.btn_preiwr_delete_onclick, this);
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.btn_00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("OUT_PRE_ENT_IWR.xfdl");

       
    };
}
)();
