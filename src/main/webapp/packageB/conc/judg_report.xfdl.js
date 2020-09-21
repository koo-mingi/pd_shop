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
                this.set_name("judg_report");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_simCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cortCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladefSepCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eventCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_vodSepCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fulDetmWtr", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">1</Col><Col id=\"codenm\">Y</Col></Row><Row><Col id=\"codeno\">2</Col><Col id=\"codenm\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_judgCode", this);
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAplCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtrmgrDepuname\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instAdm", this);
            obj._setContents("<ColumnInfo><Column id=\"instAdmJudgDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCfmDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDelidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmDivRate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitFulfDetmWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCostCfnApldate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgChg\" type=\"STRING\" size=\"256\"/><Column id=\"pladefConcCont\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgPoin\" type=\"STRING\" size=\"256\"/><Column id=\"pladefLawConcSepcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_saveResult", this);
            obj._setContents("<ColumnInfo><Column id=\"saveResult\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_judg", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"judgSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgChg\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_appr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitEnd", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("83");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("108");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "14", "454", "996", "162", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "543", "484", "460", "125", null, null, this);
            obj.set_taborder("106");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "515", "460", "488", "25", null, null, this);
            obj.set_taborder("107");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "14", "233", "996", "190", null, null, this);
            obj.set_taborder("85");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "59", "238", "944", "25", null, null, this);
            obj.set_taborder("103");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "59", "262", "944", "25", null, null, this);
            obj.set_taborder("104");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "59", "286", "944", "130", null, null, this);
            obj.set_taborder("105");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "136", "996", "60", null, null, this);
            obj.set_taborder("84");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "59", "141", "944", "25", null, null, this);
            obj.set_taborder("102");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "59", "165", "944", "25", null, null, this);
            obj.set_taborder("101");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  판결보고");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_reload", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_sim", "absolute", "448", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_simCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static01", "absolute", "338", "70", "105", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "271", "71", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_lawsuitAdmNo", "absolute", "130", "73", "130", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "14", "115", "100", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("소송 기본사항");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "756", "141", "105", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("판사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "512", "141", "105", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_caseCode", "absolute", "377", "144", "130", "19", null, null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "267", "141", "105", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_pladefSepCode", "absolute", "130", "144", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_pladefSepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Static("Static05", "absolute", "20", "141", "105", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "512", "165", "105", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("신청법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_depuName", "absolute", "377", "168", "130", "19", null, null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "267", "165", "105", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("상대담당자대리인");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "20", "165", "105", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("상대담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_typeCode", "absolute", "622", "144", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_eventCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Combo("Combo_judgId", "absolute", "866", "144", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_judgCode");
            obj.set_codecolumn("legalOfficialinfoRelaNo");
            obj.set_datacolumn("legalOfficialinfoLyrName");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Combo("Combo_cortCode", "absolute", "622", "168", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_cortCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Edit("Edit_ctpMgtName", "absolute", "130", "168", "130", "19", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "267", "238", "105", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("판결송달일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "20", "238", "105", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("판결일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "512", "238", "105", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("판결확정일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "14", "211", "100", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("심급 판결사항");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_cfmDate", "absolute", "622", "241", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("Calendar_judgDate", "absolute", "130", "241", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("Calendar_delidate", "absolute", "377", "241", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static19", "absolute", "20", "262", "105", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("총분담비율");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_divRate", "absolute", "130", "265", "110", "19", null, null, this);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "20", "286", "105", "130", null, null, this);
            obj.set_taborder("54");
            obj.set_text("판결내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "756", "238", "105", "25", null, null, this);
            obj.set_taborder("56");
            obj.set_text("승패소구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_vodSepCode", "absolute", "866", "241", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_vodSepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Static("Static25", "absolute", "267", "262", "130", "25", null, null, this);
            obj.set_taborder("58");
            obj.set_text("이행권고결정여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_fulfDetmWtr", "absolute", "402", "265", "105", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_fulDetmWtr");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_font("9 Dotum");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Static("Static13", "absolute", "512", "262", "150", "25", null, null, this);
            obj.set_taborder("60");
            obj.set_text("소송비용확정신청일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_apldate", "absolute", "667", "265", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static41", "absolute", "236", "265", "30", "25", null, null, this);
            obj.set_taborder("62");
            obj.set_text("%");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "447", "460", "110", "25", null, null, this);
            obj.set_taborder("67");
            obj.set_text("판결금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "725", "459", "30", "25", null, null, this);
            obj.set_taborder("69");
            obj.set_text("(원)");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "447", "484", "110", "125", null, null, this);
            obj.set_taborder("70");
            obj.set_text("판결사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "460", "422", "150", null, null, this);
            obj.set_taborder("72");
            obj.set_binddataset("ds_pladef");
            obj.set_autofittype("col");
            obj.set_positionstep("-1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"62\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"원피고명\"/><Cell col=\"2\" text=\"원피고등록번호\"/><Cell col=\"3\" text=\"청구소가\"/><Cell col=\"4\" text=\"소송종결여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:pladefName\"/><Cell col=\"2\" text=\"bind:pladefRegNo\"/><Cell col=\"3\" text=\"bind:pladefClamVol\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:pladefLawConcSepcode\" combodataset=\"ds_lawsuitEnd\" combocodecol=\"codeno\" combodatacol=\"codenm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "14", "626", "100", "20", null, null, this);
            obj.set_taborder("73");
            obj.set_text("결제 진행상태");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment01", "absolute", "14", "647", "120", "25", null, null, this);
            obj.set_taborder("74");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            obj.set_wordwrap("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment02", "absolute", "14", "672", "120", "25", null, null, this);
            obj.set_taborder("75");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment03", "absolute", "134", "647", "120", "25", null, null, this);
            obj.set_taborder("76");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment04", "absolute", "134", "672", "120", "25", null, null, this);
            obj.set_taborder("77");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment05", "absolute", "254", "647", "120", "25", null, null, this);
            obj.set_taborder("78");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment06", "absolute", "254", "672", "120", "25", null, null, this);
            obj.set_taborder("79");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button_confirm", "absolute", "835", "626", "55", "25", null, null, this);
            obj.set_taborder("80");
            obj.set_text("결재");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_save", "absolute", "895", "626", "55", "25", null, null, this);
            obj.set_taborder("81");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("Edit_judgConcCont", "absolute", "562", "487", "435", "118", null, null, this);
            obj.set_taborder("87");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new TextArea("Edit_judgCont", "absolute", "130", "289", "867", "124", null, null, this);
            obj.set_taborder("88");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "433", "100", "25", null, null, this);
            obj.set_taborder("89");
            obj.set_text("원고사항 목록");
            obj.style.set_font("bold 9 굴림");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edit_concChg", "absolute", "562", "463", "160", "19", null, null, this);
            obj.set_taborder("90");
            obj.set_mask("###,###");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "513", "264", "37", "23", null, null, this);
            obj.set_taborder("92");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "269", "264", "37", "23", null, null, this);
            obj.set_taborder("93");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "765", "239", "37", "23", null, null, this);
            obj.set_taborder("94");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "514", "239", "37", "23", null, null, this);
            obj.set_taborder("95");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "269", "239", "37", "23", null, null, this);
            obj.set_taborder("96");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "36", "239", "37", "23", null, null, this);
            obj.set_taborder("97");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "36", "339", "37", "23", null, null, this);
            obj.set_taborder("98");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "466", "536", "37", "23", null, null, this);
            obj.set_taborder("99");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "16", "431", "100", "25", null, null, this);
            obj.set_taborder("109");
            obj.set_text("피고사항 목록");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "626", "55", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  판결보고");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edit_lawsuitAdmNo","value","ds_search","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Combo_sim","value","ds_search","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Combo_pladefSepCode","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit_caseCode","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Combo_typeCode","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Combo_judgId","value","ds_lawsuit","instAdmJudId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit_ctpMgtName","value","ds_lawsuit","instAdmCtpmgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit_depuName","value","ds_lawsuit","instAdmCtrmgrDepuname");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Combo_cortCode","value","ds_lawsuit","lawsuitAplCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Calendar_judgDate","value","ds_instAdm","instAdmJudgDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Calendar_delidate","value","ds_instAdm","instAdmJudgDelidate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Calendar_cfmDate","value","ds_instAdm","instAdmJudgCfmDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Combo_vodSepCode","value","ds_instAdm","instAdmVodSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Edit_divRate","value","ds_instAdm","instAdmDivRate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Calendar_apldate","value","ds_instAdm","lawsuitCostCfnApldate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Combo_fulfDetmWtr","value","ds_instAdm","lawsuitFulfDetmWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Edit_judgConcCont","value","ds_pladef","pladefJudgPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Edit_judgCont","value","ds_instAdm","instAdmJudgCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Edit_concChg","value","ds_pladef","pladefJudgChg");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("judg_report.xfdl", "Lib::common.xjs");
        this.registerScript("judg_report.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        //소송관리번호
        var lawsuitAdmNo="";
        //심급코드
        var instAdmCode="";
        var aprv_lawsrcrlt="";
        this.judg_report = function(obj,e)
        {
        	this.setCode();
        // 	// 상신진행리스트에서 메뉴이동
        // 	aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL");
        // 	
        // 		if(aprv_lawsrcrlt) {
        // 	instAdmCode=aprv_lawsrcrlt.substr(13,3);
        // 		this.modal_callback("SearchModal", aprv_lawsrcrlt);
        // 	}
        // 	
        		// JKIM_2020.01.02 : 상신진행리스트에서 메뉴이동
        // 		if(typeof (application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL"))!='undefined'){
        //  	aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL");
        // 
        //  	if(aprv_lawsrcrlt) {
        // 	instAdmCode=aprv_lawsrcrlt.substr(13,3);
        // 		this.modal_callback("SearchModal", aprv_lawsrcrlt);
        //  	}	
        //  	}
        //  	
        //  	if(typeof (application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL"))!='undefined'){
        //  	//전체결제
        // 	aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL");
        //  	if(aprv_lawsrcrlt) {
        // 	instAdmCode=aprv_lawsrcrlt.substr(13,3);
        //  		this.modal_callback("SearchModal", aprv_lawsrcrlt);
        // 	}	
        //  	}
        	//결제진행리스트에서
        	var rtnObj = this.gfnGetArgument();
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        	aprv_lawsrcrlt =rtnObj.legaladvLawAdvReqNo;
        		if(rtnObj.legaladvLawAdvReqNo) {
        		instAdmCode=aprv_lawsrcrlt.substr(13,3);
        		this.modal_callback("SearchModal",aprv_lawsrcrlt);
        		}
        	}
        	
        	//상시결제리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListEmpl))
        	{
        	aprv_lawsrcrlt =rtnObj.aprvListEmpl;
        		if(rtnObj.aprvListEmpl){
        		instAdmCode=aprv_lawsrcrlt.substr(13,3);
        		this.modal_callback("SearchModal",aprv_lawsrcrlt);
        		}
        	}
        	
        	//전체결재리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListAll))
        	{
        	 trace("전체 : "+rtnObj.aprvListAll);
        		aprv_lawsrcrlt =rtnObj.aprvListAll;
        		if(rtnObj.aprvListAll){
        		instAdmCode=aprv_lawsrcrlt.substr(13,3);
        		 this.modal_callback("SearchModal",aprv_lawsrcrlt);
        		 }
        	}
        }

        //코드 호출 함수
        this.setCode = function()
        {
         	this.gf_codeComListLoad("ds_pladefSepCode",  "ds_pladefSepCode",   "N", "", "", "fn_Callback", "H02"); // 당사원피고코드
         	this.gf_codeComListLoad("ds_cortCode",  "ds_cortCode",   "N", "", "", "fn_Callback", "A01");// 수행법원코드
         	this.gf_codeComListLoad("ds_eventCode",  "ds_eventCode",   "N", "", "", "fn_Callback", "A02");// 사건유형코드
         	this.gf_codeComListLoad("ds_vodSepCode",  "ds_vodSepCode",   "N", "", "", "fn_Callback", "G03");// 승패소코드
         	this.gf_codeComListLoad("ds_lawsuitEnd",  "ds_lawsuitEnd",   "N", "", "", "fn_callback", "H01");// 소송종결코드
        	this.getJudgName(); // 판사 이름 및 ID
        }

        

        //소송관리번호 검색
        this.Button_numSearch_onclick = function(obj,e)
        {

        	this.ds_instAdm.clearData();
        	this.ds_lawsuit.clearData();
        	this.ds_pladef.clearData();
        	this.Static_payment01.set_text("");
        	this.Static_payment02.set_text("");
        	this.Static_payment03.set_text("");
        	this.Static_payment04.set_text("");
        	this.Static_payment05.set_text("");
        	this.Static_payment06.set_text("");
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
        		
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        		
        		
         		this.getSimInfo();
        		this.getLawsuitInfo();
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
        	
        	instAdmCode = this.Combo_sim.value;
        	trace("@@@심급번호 : " + instAdmCode);
        	
        	this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        			
        	this.ds_instAdm.clearData();
        	this.ds_lawsuit.clearData();
        	this.ds_pladef.clearData();
        	
        	this.getLawsuitInfo();
        }

        
        //TAB_LAWSUIT // 소송기본사항 조회
        this.getLawsuitInfo = function(){
        	trace("================getLawsuitInfo=======================");

        	this.gfn_transaction(this,
        			  "getLawsuitInfo",
        			  "conc/getlawsuitInfo.do",
        			  "ds_search=ds_search",
        			  "ds_lawsuit=ds_lawsuit",
        			  "",
        			  "fn_callback");	
        }

        //TAB_INST_ADM
        this.getInstAdmInfo = function(){
        	trace("================getInstAdmInfo=======================");

        	this.gfn_transaction(this,
        			  "getInstAdmInfo",
        			  "conc/getInstAdmInfo.do",
        			  "ds_search=ds_search",
        			  "ds_instAdm=ds_instAdm",
        			  "",
        			  "fn_callback");			  
        }

        //TAB_INST_ADM
        this.getpladefInfo = function(){

        	trace("================getpladefInfo=======================");
        	this.gfn_transaction(this,
        			  "getpladefInfo",
        			  "conc/getPladefInfo.do",
        			  "ds_search=ds_search",
        			  "ds_pladef=ds_pladef",
        			  "",
        			  "fn_callback");			  
        }

        //판사 이름 및 아이디 불러오기
        this.getJudgName = function(){
        	
        	trace("================getJudgName=======================");
        	this.gfn_transaction(this,
        		  "getJudgName",
        		  "pre_iwr/getJudgName.do",
        		  "",
        		  "ds_judgCode=ds_judgCode",
        		  "",
        		  "fn_callback");
        }

        //callback함수
        this.fn_callback = function(svcId,errcd,errmsg)
        {
        	if(svcId=="ds_lawsuitEnd") trace("종겨8ㄹ :ㅣ "+this.ds_lawsuitEnd.saveXML());
        	trace("==========fn_callback==========" + svcId);
        	if(svcId == "getLawsuitInfo"){
        		trace("==========: "+svcId+"==========");
        		if(errcd < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else{
        		// 피고사항목록 조회
        		//trace("판결 : "+this.ds_lawsuit.saveXML());
        			var pladef_Sep_Code ='';
        			//당사원고일때 피고항목을 불러오도록 처리
        			if(this.Combo_pladefSepCode.value=='001') this.ds_search.setColumn(0,"pladefSepCode",'002');
        			else if(this.Combo_pladefSepCode.value=='002') this.ds_search.setColumn(0,"pladefSepCode",'001');
        			
        			if(this.Combo_pladefSepCode.value=='002'){
        				this.Static22.set_visible(false);
        				this.Static00.set_visible(true);
        				this.getpladefInfo();
        			}else{

        				this.Static22.set_visible(true);
        				this.Static00.set_visible(false);
        				this.getpladefInfo();
        			}

        		this.getInstAdmInfo();
        		}
        	}
        	else if (svcId == "getInstAdmInfo"){
        		trace("==========svcId : "+svcId+"==========");
        		// 결재라인 불러오기
        			var passport = this.getBookNo();
        			trace("getInstAdmInfo 결재라인 불러오기");
        			this.aprv_search(passport);
        		//this.getpladefInfo();
        	}
        	else if (svcId == "dataSave"){
        		trace("==========svcId : "+svcId+"==========");
        		trace("==========저장완료==========");
        		alert("저장되었습니다.");
        		return false;
        	}
        	if(svcId == "getpladefInfo"){
        	this.ds_pladef.set_rowposition(-1);
        	}
        	if(svcId=="approvalLineListcode"){
        	var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	var cnt=0;
        		for(i=0;i<this.ds_appr.getRowCount();i++){
        			if(this.ds_appr.getColumn(i,"aprvlineAdmAprvId")==loginSabun) {
        			alert("결제자는 상신을 할 수 없습니다.");
        			return;
        			}
        		}
        		//3차결재라인 중 반려가 있을 경우   
         			 var nLeft = system.clientToScreenX(this, 10);
         	 var nTop = system.clientToScreenY(this, 10);
         	 
         	 var newChild = new ChildFrame;
         	 newChild.init("aprvprogcomm"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "aprv::APRV_PROG_COMMENT.xfdl");
         					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
         	
         	newChild.showModal(this.getOwnerFrame()
        						, {stepCode:"006", bookNo:this.getBookNo(),aprvprgrInfoSeq:this.ds_position.getColumn(0, "aprvprgrInfoSeq")}
        						, this
        						, "modal_callback2");
        	}
        	
        	if(svcId=="getJudgName") //trace("판사명 : "+this.ds_judgCode.saveXML());
         	var sepCode = this.ds_lawsuit.getColumn(0,"lawsuitCpPladefSepcode");
         	this.setTitle(sepCode);
        }

        // 원/피고 여부에 따라 메뉴 이름 스위칭
        this.setTitle = function(sepCode){
        	if(sepCode == "001") { // 원고일때
        		this.Static00.set_text("피고사항 목록");
        	} else { // 원고일때
        		this.Static00.set_text("원고사항 목록");
        	};
        }

        //초기화
        this.Button_reload_onclick = function(obj,e)
        {
         	trace("초기화~");
        	this.ds_lawsuit.clearData();
        	this.ds_pladefSepCode.clearData();
        	this.ds_pladef.clearData();
        	this.ds_position.clearData();
        	this.ds_position_code.clearData();
        	this.ds_search.clearData();
        	alert("초기화 되었습니다.");
        	//현재 페이지를 새로고침하여 초기화
        	this.reload();
        }

        //닫기
        // this.Button_close_onclick = function(obj:Button, e:nexacro.ClickEventInfo)
        // {
        // 	this.close();
        // }

        //저장
        this.Button_save_onclick = function(obj,e)
        {
        	if(this.ds_lawsuit.rowcount==0){
        		application.alert("검색 후 이용하세요");
        		return false;
        	}

        	var vaildation=true;

        	if(this.gfn_Trim(this.Calendar_judgDate.value).length<=0) {
        		alert("판결일자를 입력해 주십시오.");
        		this.Calendar_judgDate.dropdown();
        		vaildation=false;
        	}else if(this.gfn_Trim(this.Calendar_delidate.value).length<=0){
        	alert("판결송달일자를 입력해 주십시오.");
        	this.Calendar_delidate.dropdown();
        		vaildation=false;
        	}else if(this.gfn_Trim(this.Calendar_cfmDate.value).length<=0){
        	alert("판결확정일자를 입력해 주십시오.");
        	this.Calendar_cfmDate.dropdown();
        		vaildation=false;
        	}else if(this.gfn_Trim(this.Combo_vodSepCode.value).length<=0){
        	alert("승패소구분코드를 입력해 주십시오.");
        	this.Combo_vodSepCode.dropdown();
        		vaildation=false;
        	}else if(this.gfn_Trim(this.Combo_fulfDetmWtr.value).length<=0){
        	alert("이행권고결정여부를 입력해 주십시오.");
        	this.Combo_fulfDetmWtr.dropdown();
        		vaildation=false;
        	}else if(this.gfn_Trim(this.Calendar_apldate.value).length<=0){
        	alert("소송비용확정신청일자를 입력해 주십시오.");
        	this.Calendar_apldate.dropdown();
        		vaildation=false;
        	}else if(this.gfn_Trim(this.Edit_judgCont.value).length<=0){
        	alert("판결내용을 입력해 주십시오.");
        	this.Edit_judgCont.setFocus();
        		vaildation=false;
        	}
        	else if(this.JudgPoinCheck()==false){
        	trace("저장사항");
        	vaildation=false;
        	}

        	if(vaildation){

        	this.gfn_transaction(this,
        		  "dataSave",
        		  "conc/dataSave.do",
        		  "ds_lawsuit=ds_lawsuit:U ds_instAdm=ds_instAdm:U ds_pladef=ds_pladef:U",
        		  "",
        		  "",
        		  "fn_callback");
        		  }
        }
        this.btn_med_approve_OnClick = function(obj,e)
         {
         	  var validation=true;
         	
         	var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
         	var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
         	var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
         	var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
         	trace("3차 : "+infoSabun_03);
         	var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
             var BookNo="";
             
              var passport = this.getBookNo();
                if(this.edit_lawsuitAdmNo.value==''||typeof(this.edit_lawsuitAdmNo.value)=='undefined'){
         		alert("소송관리번호를 조회하세요.");
         		validation = false;
         	}else if(this.gfn_Trim(this.Combo_fulfDetmWtr.value).length<=0){
         		alert("저장 후 상신하세요.");
         		this.Combo_fulfDetmWtr.setFocus();
         		validation = false;
         	}else if((this.gfn_Trim(this.Calendar_apldate.value)).length<=0){
         		alert("저장 후 상신하세요.");
         		this.Calendar_apldate.dropdown();
         		validation = false;
         	}else if((this.gfn_Trim(this.Calendar_judgDate.value)).length<=0){
         		alert("저장 후 상신하세요.");
         		this.Calendar_judgDate.dropdown();
         		validation = false;
         	}else if((this.gfn_Trim(this.Calendar_delidate.value)).length<=0){
         		alert("저장 후 상신하세요.");
         		this.Calendar_delidate.dropdown();
         		validation = false;
         	}else if((this.gfn_Trim(this.Calendar_cfmDate.value)).length<=0){
         		alert("저장 후 상신하세요.");
         		this.Calendar_cfmDate.dropdown();
         		validation = false;
         	}else if((this.gfn_Trim(this.Combo_vodSepCode.value)).length<=0){
         		alert("저장 후 상신하세요.");
        		this.Combo_vodSepCode.setFocus();
        		validation = false;
        	}else if((this.gfn_Trim(this.Edit_judgCont.value)).length<=0){
        		alert("저장 후 상신하세요.");
         		this.Edit_judgCont.setFocus();
        		validation = false;
        	}else{
        // // 	     ds_judg.UnFilter();
        // // 	
        // // 		//원피고목록 수만큼 판결사항 유무 체크

        		if(this.ds_pladef.rowcount>0 &&this.JudgPoinCheck()==false){
        			alert("판결사항을 모두 입력하세요");
        			this.Edit_judgConcCont.setFocus();
        			validation=false;
        			return false;
        		}
         	}
        	if(validation){  
         		//결재버튼 클릭시 상신페이지 연결
        //  		if(writSabun == loginSabun || writSabun == null) {
        //  			//3차결재라인 중 반려가 있을 경우   
        //  			 var nLeft = system.clientToScreenX(this, 10);
        //  	 var nTop = system.clientToScreenY(this, 10);
        //  	 
        //  	 var newChild = new ChildFrame;
        //  	 newChild.init("aprvprogcomm"
        // 					, "absolute", nLeft, nTop, 300, 250, null, null
        // 					, "aprv::APRV_PROG_COMMENT.xfdl");
        //  					
        // 	newChild.set_openalign("center middle");
        // 	newChild.set_dragmovetype("all");
        //  	
        //  	newChild.showModal(this.getOwnerFrame()
        // 						, {stepCode:"006", bookNo:passport}
        // 						, this
        // 						, "modal_callback2");
        //   
        //  		}else if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun){        
        //  			//결재버튼 클릭시 결재페이지(코멘트) 연결
        // 				 var nLeft = system.clientToScreenX(this, 10);
        //  	 var nTop = system.clientToScreenY(this, 10);
        //  	 
        // 	 var newChild = new ChildFrame;
        //  	 newChild.init("aprvcomm"
        // 					, "absolute", nLeft, nTop, 300, 250, null, null
        // 					, "aprv::APRV_COMMENT.xfdl");
        //  					
        //  	newChild.set_openalign("center middle");
        //  	newChild.set_dragmovetype("all");
        //  	
        //  	newChild.showModal(this.getOwnerFrame()
        //  						, {stepCode:"006", bookNo:passport, dataset:this.ds_position.saveXML()}
        // 						, this
        //  						, "modal_callback2");
        //  		}else{ 
        //  		
        //  		}  
             if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun){
             		//결재버튼 클릭시 결재페이지(코멘트) 연결
        				 var nLeft = system.clientToScreenX(this, 10);
         	 var nTop = system.clientToScreenY(this, 10);
         	 
        	 var newChild = new ChildFrame;
         	 newChild.init("aprvcomm"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "aprv::APRV_COMMENT.xfdl");
         					
         	newChild.set_openalign("center middle");
         	newChild.set_dragmovetype("all");
         	
         	newChild.showModal(this.getOwnerFrame()
         						, {stepCode:"006", bookNo:passport, dataset:this.ds_position.saveXML()}
        						, this
         						, "modal_callback2");
             }else if(writSabun == loginSabun || writSabun == null){
             this.ds_appr.setColumn(0,"aprvlineAdmProcCode","006");
             trace( "get : "+this.ds_appr.getColumn(0,"aprvlineAdmProcCode"));
        this.gfn_transaction(this,"approvalLineListcode","/apprline/ApprovalLineListCode.do",
        "ds_appr=ds_appr",
        "ds_appr=ds_output","","fn_callback");
        		
             }

        	
        	
        	}
             }
            this.modal_callback2 = function(strID,variant){
            trace("몽달 : "+strID);
            if(strID=='aprvprogcomm' ||strID=='aprvcomm'){
              trace("몽달 : "+variant);
         		if(variant==''||variant==null){
        		
         		}else{
         		trace("aprvprogcomm결제라인");
         			this.aprv_search(variant);
         		}
             }
            }
             
        //     //결제라인 불러오기
            this.aprv_search=function(passport){
        		this.ds_position.clearData();
         		this.ds_position_code.clearData();
         		trace("APRVPRGR_INFO_BOOK_NO : "+passport);
        		var strParam="APRVPRGR_INFO_STEP_CODE=" + "\""+"006"+"\"";
         		strParam+=" APRVPRGR_INFO_BOOK_NO=" + "\""+passport+"\"";
         		this.gfn_transaction(this,
        		  "outList",
        		  "approval/approvalLineList.do",
        		  "",
         		  "ds_position=ds_output",
         		  strParam,
         		  "fn_callback2");
            }
            this.fn_callback2=function(strId,errcode,errmsg){
         
           // trace("ds_po  "+this.ds_position.saveXML());
            if(strId == "outList"){
            trace("이거슨 결재");
        		if(errcode < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else {
         			trace("outlistdfsf : "+this.ds_position.saveXML());
        			//결재라인box (ds_position_code) 생성
        		var cnt = 0;
        			var cc="y";
         			var loginSabun =application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
         			trace("결재 for d: "+this.ds_position.getRowCount());
         	
        			for(var i=0 ; i<this.ds_position.getRowCount() ; i++){	
         				this.ds_position_code.addRow();
         			if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){			//결재완료
        					static2="결재완료";
        	
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        					//this.Static_payment02.set_text("결재대기");
        						static2="결재대기";
         					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z"){		//반려
        				static2="반려";
         								//this.Static_payment02.set_text("반려");
        						cc="n";
         					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A"){		//전결
        						//this.ds_position_code.setColumn(cnt, "codeno","A");
         						//this.ds_position_code.setColumn(cnt, "codenm","전결");	
         								//this.Static_payment02.set_text("전결");
         								static2="전결";
         					}else{
        					}
        					if(i==0){
        					this.Static_payment01.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        					this.Static_payment02.set_text(static2);
        					}
        					if(i==1){
        				

        							this.Static_payment03.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        							this.Static_payment04.set_text(static2);
        							
        						
        					}
        					if(i==2){
        		
        							this.Static_payment05.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        							this.Static_payment06.set_text(static2);			
        					
        					}

        
        			cnt++;
        		}
        // 			//반려시 상신자만 결재라인 초기화

         			if(cc=="n" && this.ds_position.getColumn(0, "aprvprgrInfoWritSabun")==loginSabun){
        				trace("들어옴");
         				this.ds_position.clearData();
         				this.ds_position_code.clearData();
         				//초기화
         				this.Static_payment01.set_text("");
         				this.Static_payment02.set_text("");
         				this.Static_payment03.set_text("");
         				this.Static_payment04.set_text("");
         				this.Static_payment05.set_text("");
         				this.Static_payment06.set_text("");
        				return false;
        			}
        			this.aprv_lock();
         			

        			
        		}
        		
         	}
         	
            }
        //     
            //페이지  lock
            this.aprv_lock=function(){
            trace("lock");
            trace("결제의견 내용 시키야"+this.ds_position.getColumn(0, "aprvInfoCont"));
            trace("결제의견 내용 시키야"+this.ds_position.getColumn(1, "aprvInfoCont"));
        		var id =application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        // 	if(typeof(this.ds_position.getColumn(0, "aprvInfoCont"))=='undefined'){
        // 		this.Button_confirm.set_enable(true);
        // 		this.Button_save.set_enable(true);
        // 		this.enable_true();
        // 		trace("결제버튼확인1");
        	//}
        	//else 
        	trace("와쫌............ : "+this.ds_position.getColumn(1, "aprvInfoCont") );
        	if(this.Static_payment01.text==''){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(true);
        		this.enable_true();
        		trace("결제버튼확인1");
        	}
        	else if(this.ds_position.getColumn(0, "aprvInfoCont") == "" ||typeof(this.ds_position.getColumn(0, "aprvInfoCont"))=='undefined'){
        		if(this.ds_position.getColumn(0, "aprvprgrInfoWritSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(true);
        			this.enable_true();	
        			trace("결제버튼확인2");
        		}else if(this.ds_position.getColumn(0, "aprvInfoSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인3");
        		}else{
        		this.Button_confirm.set_enable(false);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인4");
        		}
        	}else if(this.ds_position.getColumn(1, "aprvInfoCont") == "" || typeof(this.ds_position.getColumn(1, "aprvInfoCont"))=='undefined'){
        		if(this.ds_position.getColumn(0, "aprvInfoSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인5");
        		}else if(this.ds_position.getColumn(1, "aprvInfoSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인6");
        		}else{
        			this.Button_confirm.set_enable(false);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인7");
        		}
        	}else if(this.ds_position.getColumn(2, "aprvInfoCont") == ""||typeof(this.ds_position.getColumn(2, "aprvInfoCont"))=='undefined'){
        		if(this.ds_position.getColumn(1, "aprvInfoSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인8");
        		}else if(this.ds_position.getColumn(2, "aprvInfoSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인9");
        		}else{
        			this.Button_confirm.set_enable(false);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        		}
        	}else if(this.ds_position.getColumn(2, "aprvInfoCont") != ""||typeof(this.ds_position.getColumn(2, "aprvInfoCont"))!='undefined'){
        		if(this.ds_position.getColumn(2, "aprvInfoSabun") == id){
        			this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인11");
        		}else{
        			this.Button_confirm.set_enable(false);
        		this.Button_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인12");
        		}
        	}
        		
            }
            this.enable_true=function(){
            // 심급판결사항
        	this.Combo_fulfDetmWtr.set_enable(true);
        	this.Calendar_apldate.set_enable(true);
        	this.Calendar_judgDate.set_enable(true);
        	this.Combo_vodSepCode.set_enable(true);
        	this.Calendar_delidate.set_enable(true);
        	this.Calendar_cfmDate.set_enable(true);
        	this.Edit_judgCont.set_enable(true);
        	
        	//판결금액, 판결사항
        	this.Edit_concChg.set_enable(true);
        	this.Edit_judgConcCont.set_enable(true);
        	this.Edit_divRate.set_enable(true);
            }
            
            
            this.enable_false=function(){
            this.Combo_fulfDetmWtr.set_enable(false);
        	this.Calendar_apldate.set_enable(false);
        	this.Calendar_judgDate.set_enable(false);
        	this.Combo_vodSepCode.set_enable(false);
        	this.Calendar_delidate.set_enable(false);
        	this.Calendar_cfmDate.set_enable(false);
        	this.Edit_judgCont.set_enable(false);
        	
        	//판결금액, 판결사항
        	this.Edit_concChg.set_enable(false);
        	this.Edit_judgConcCont.set_enable(false);
        	this.Edit_divRate.set_enable(false);
            }

        this.getBookNo=function(){
         var BookNo = "";
         	trace("1");
         	var pSeq="";
         	if(this.edit_lawsuitAdmNo.value!="" && this.ds_pladef.rowcount==0) {
         
         	}
         	else if(typeof(this.ds_pladef.getColumn(0,"pladefSeq"))=='undefined' ||this.ds_pladef.getColumn(0,"pladefSeq")==""||this.ds_pladef.getColumn(0,"pladefSeq")==null){
        		return;
        		}else{
        		pSeq=this.ds_pladef.getColumn(0,"pladefSeq").toString();
        		} 
        		trace("2");
           var pTemp =""; 
           // 원피고일련번호
            if( pSeq != "" && pSeq.length == 4 ){
            }else if(  pSeq != "" &&  pSeq.length < 5 ){
               for(i=0; i<3; i++){
                   pSeq = (pTemp+"0") + pSeq;  
               }
            }else{
                pSeq = "0000";
            }
                
        	BookNo = this.edit_lawsuitAdmNo.value   		// 소송관리번호
        	       + "006"                              // 업무구분코드
        		   + this.Combo_sim.value 			// 심급차수	 
        		   + pSeq;								// 원피고일련번호

        	trace("book : "+BookNo);
           return BookNo;
        }

        //피고/원고 헤더정렬
        this.grd_Search_OnHeadClick=function(obj,e){

        	this.gfn_GridSort(this.Grid00,this.ds_pladef,e.col,3);
        }
        //판결사항 입력여부
        this.JudgPoinCheck=function(){
        trace("어디니");
        trace("dd : "+this.ds_pladef.rowcount);
        	for(i=0;i<this.ds_pladef.rowcount;i++){
        		if((typeof(this.ds_pladef.getColumn(i,"pladefName"))!='undefined')&&(this.ds_pladef.getColumn(i,"pladefJudgPoin")==null)||typeof(this.ds_pladef.getColumn(i,"pladefJudgPoin"))=='undefined'){
        		alert("판결사항을 모두 입력하세요");
        		this.ds_pladef.rowposition=i;
        		this.Edit_judgConcCont.setFocus();
        		return false;
        		}
        	}
        	return true;
        }
        this.btn_search_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        this.grid_click=function(obj,e){
        trace("클 : "+this.ds_pladef.getColumn(e.row,"pladefLawConcSepcode"));
        	if(  ! this.gfn_IsNull(this.ds_pladef.getColumn(e.row,"pladefLawConcSepcode"))){
        	trace("비활");
        		this.Edit_concChg.set_enable(false);
        		this.Edit_judgConcCont.set_enable(false);
        	}
            else {
            trace("활");
        		this.Edit_concChg.set_enable(true);
        		this.Edit_judgConcCont.set_enable(true);
            }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.judg_report, this);
            this.Button_reload.addEventHandler("onclick", this.Button_reload_onclick, this);
            this.Combo_sim.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Grid00.addEventHandler("onheadclick", this.grd_Search_OnHeadClick, this);
            this.Grid00.addEventHandler("oncellclick", this.grid_click, this);
            this.Button_confirm.addEventHandler("onclick", this.btn_med_approve_OnClick, this);
            this.Button_save.addEventHandler("onclick", this.Button_save_onclick, this);
            this.Edit_judgConcCont.addEventHandler("oneditclick", this.Edit_judgConcCont_oneditclick, this);
            this.Edit_judgCont.addEventHandler("oneditclick", this.Edit_judgCont_oneditclick, this);
            this.Static18.addEventHandler("onclick", this.Static18_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("judg_report.xfdl");

       
    };
}
)();
