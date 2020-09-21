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
                this.set_name("LAWSUIT_REC001_Re");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_simCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsCode\" type=\"STRING\" size=\"256\"/><Column id=\"examinationSerialSeq\" type=\"STRING\" size=\"256\"/><Column id=\"injuryPositionSerialSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hos", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_subject", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_phyAprs", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsCode\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsName\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsHosCode\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsAccdCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_examination", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"examinationSerialSeq\" type=\"STRING\" size=\"256\"/><Column id=\"examinationSubjectCode\" type=\"STRING\" size=\"256\"/><Column id=\"examinationDr\" type=\"STRING\" size=\"256\"/><Column id=\"examinationTime\" type=\"STRING\" size=\"256\"/><Column id=\"examinationProgCode\" type=\"STRING\" size=\"256\"/><Column id=\"examinationDate\" type=\"STRING\" size=\"256\"/><Column id=\"examinationReDate\" type=\"STRING\" size=\"256\"/><Column id=\"examinationResult\" type=\"STRING\" size=\"256\"/><Column id=\"examinationDiseaseName\" type=\"STRING\" size=\"256\"/><Column id=\"examinationInjuryFacts\" type=\"STRING\" size=\"256\"/><Column id=\"examinationReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"examinationClaimRank\" type=\"STRING\" size=\"256\"/><Column id=\"examinationAdminRank\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_injury", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"injuryPositionSerialSeq\" type=\"STRING\" size=\"256\"/><Column id=\"injuryPositionCode\" type=\"STRING\" size=\"256\"/><Column id=\"injuryPositionFacts\" type=\"STRING\" size=\"256\"/><Column id=\"injuryPositionPaymentRate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsCode\" type=\"STRING\" size=\"256\"/><Column id=\"examinationSerialSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_phyAprsCode", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"phyAprsCode\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_injuryCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prog", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_03", "absolute", "14", "496", "996", "117", null, null, this);
            obj.set_taborder("108");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "14", "279", "996", "158", null, null, this);
            obj.set_taborder("107");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "151", "996", "111", null, null, this);
            obj.set_taborder("106");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "67", "996", "35", null, null, this);
            obj.set_taborder("105");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22", "72", "980", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button_reload", "absolute", "940", "73", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_sim", "absolute", "466", "75", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_simCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Static("Static02", "absolute", "346", "72", "115", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "285", "74", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_lawsuitAdmNo", "absolute", "140", "75", "140", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "72", "115", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "22", "309", "980", "25", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "20", "309", "105", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("신체감정신청일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "265", "309", "105", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("신체감정일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "511", "309", "105", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("감정회신일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "22", "285", "980", "25", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "285", "105", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("과목코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "265", "285", "105", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("감정의");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "511", "285", "105", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("감정일시");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_subject", "absolute", "130", "288", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_subject");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Static("Static12", "absolute", "22", "381", "980", "50", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "20", "381", "105", "50", null, null, this);
            obj.set_taborder("25");
            obj.set_text("장해내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_del", "absolute", "955", "458", "55", "23", null, null, this);
            obj.set_taborder("32");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_addRow", "absolute", "895", "458", "55", "23", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_save", "absolute", "895", "619", "55", "23", null, null, this);
            obj.set_taborder("50");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "955", "619", "55", "23", null, null, this);
            obj.set_taborder("51");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("59");
            obj.set_text("  신체감정관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "611", "72", "115", "25", null, null, this);
            obj.set_taborder("60");
            obj.set_text("회차");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_count", "absolute", "731", "75", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_innerdataset("@ds_phyAprsCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static14", "absolute", "22", "157", "980", "25", null, null, this);
            obj.set_taborder("62");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", "122", "100", "25", null, null, this);
            obj.set_taborder("63");
            obj.set_text("신체 감정");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "22", "181", "980", "75", null, null, this);
            obj.set_taborder("64");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "20", "157", "115", "25", null, null, this);
            obj.set_taborder("65");
            obj.set_text("피감정인명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "346", "157", "115", "25", null, null, this);
            obj.set_taborder("67");
            obj.set_text("감정병원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "20", "181", "115", "75", null, null, this);
            obj.set_taborder("68");
            obj.set_text("사고내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_AccdCont", "absolute", "140", "184", "856", "69", null, null, this);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_name", "absolute", "140", "160", "140", "19", null, null, this);
            obj.set_taborder("70");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "22", "357", "980", "25", null, null, this);
            obj.set_taborder("73");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "20", "357", "105", "25", null, null, this);
            obj.set_taborder("74");
            obj.set_text("병명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_disease", "absolute", "130", "360", "375", "19", null, null, this);
            obj.set_taborder("75");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "22", "333", "980", "25", null, null, this);
            obj.set_taborder("79");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "20", "333", "105", "25", null, null, this);
            obj.set_taborder("80");
            obj.set_text("당사인인정급수");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "265", "333", "105", "25", null, null, this);
            obj.set_taborder("81");
            obj.set_text("상대방주장급수");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "511", "333", "105", "25", null, null, this);
            obj.set_taborder("82");
            obj.set_text(" 감정결과");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "757", "285", "105", "25", null, null, this);
            obj.set_taborder("87");
            obj.set_text("진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_doc", "absolute", "375", "288", "130", "19", null, null, this);
            obj.set_taborder("88");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_examTime", "absolute", "621", "288", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("Calendar_getDate", "absolute", "621", "312", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("Calendar_examDate", "absolute", "375", "312", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("Calendar_reDate", "absolute", "130", "312", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static22", "absolute", "14", "456", "100", "25", null, null, this);
            obj.set_taborder("94");
            obj.set_text("부위별 장해내역");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_your", "absolute", "375", "336", "130", "19", null, null, this);
            obj.set_taborder("95");
            obj.set_enable("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_mine", "absolute", "130", "336", "130", "19", null, null, this);
            obj.set_taborder("96");
            obj.set_enable("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("0");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_result", "absolute", "621", "336", "130", "19", null, null, this);
            obj.set_taborder("97");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_hos", "absolute", "466", "160", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_innerdataset("@ds_hos");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_prog", "absolute", "867", "288", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_innerdataset("@ds_prog");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Grid("Grid00", "absolute", "20", "502", "984", "105", null, null, this);
            obj.set_taborder("100");
            obj.set_binddataset("ds_injury");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"80\"/><Column size=\"607\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"장해부위\"/><Cell col=\"2\" text=\"장해분류\"/><Cell col=\"3\" text=\"지급률\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:injuryPositionCode\" combodataset=\"ds_injuryCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:injuryPositionFacts\"/><Cell col=\"3\" text=\"bind:injuryPositionPaymentRate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button_phySave", "absolute", "443", "456", "113", "24", null, null, this);
            obj.set_taborder("102");
            obj.set_text("신체감정 저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button_addData", "absolute", "878", "73", "55", "23", null, null, this);
            obj.set_taborder("103");
            obj.set_text("회차추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "68.75%", "659", null, "28", "17.97%", null, this);
            obj.set_taborder("104");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static03", "absolute", "36", "158", "37", "23", null, null, this);
            obj.set_taborder("109");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "37", "286", "37", "23", null, null, this);
            obj.set_taborder("110");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "289", "286", "37", "23", null, null, this);
            obj.set_taborder("111");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "528", "286", "37", "23", null, null, this);
            obj.set_taborder("112");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static04", "absolute", "773", "286", "37", "23", null, null, this);
            obj.set_taborder("113");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static05", "absolute", "19", "310", "37", "23", null, null, this);
            obj.set_taborder("114");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static06", "absolute", "277", "310", "37", "23", null, null, this);
            obj.set_taborder("115");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static07", "absolute", "523", "310", "37", "23", null, null, this);
            obj.set_taborder("116");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static08", "absolute", "531", "334", "37", "23", null, null, this);
            obj.set_taborder("117");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static09", "absolute", "263", "334", "37", "23", null, null, this);
            obj.set_taborder("118");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static10", "absolute", "18", "334", "37", "23", null, null, this);
            obj.set_taborder("119");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static11", "absolute", "48", "358", "37", "23", null, null, this);
            obj.set_taborder("120");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static12", "absolute", "37", "395", "37", "23", null, null, this);
            obj.set_taborder("121");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static13", "absolute", "367", "158", "37", "23", null, null, this);
            obj.set_taborder("122");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("Txt_diseasePoin", "absolute", "130", "384", "866", "44", null, null, this);
            obj.set_taborder("123");
            obj.set_wordwrap("char");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","Edit_doc","value","ds_examination","examinationDr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Combo_prog","value","ds_examination","examinationProgCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit_mine","value","ds_examination","examinationAdminRank");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit_your","value","ds_examination","examinationClaimRank");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit_result","value","ds_examination","examinationResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit_disease","value","ds_examination","examinationDiseaseName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Calendar_examTime","value","ds_examination","examinationTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Calendar_reDate","value","ds_examination","examinationReDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Calendar_examDate","value","ds_examination","examinationDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Calendar_getDate","value","ds_examination","examinationReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Combo_subject","value","ds_examination","examinationSubjectCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edit_lawsuitAdmNo","value","ds_search","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Edit_name","value","ds_phyAprs","phyAprsName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Combo_hos","value","ds_phyAprs","phyAprsHosCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit_AccdCont","value","ds_phyAprs","phyAprsAccdCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Txt_diseasePoin","value","ds_examination","examinationInjuryFacts");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Exam.xfdl", "Lib::common.xjs");
        this.registerScript("Exam.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        //소송관리번호
        var lawsuitAdmNo="";
        //심급코드
        var instAdmCode="";
        //원피고일련번호
        var phyAprsCode="";
        //
        var examinationSerialSeq="";

        this.LAWSUIT_REC_onload = function(obj,e)
        {
        	this.setCode();
        	this.Button_phySave.set_enable(false);

        }

        
        //코드 호출 함수
        this.setCode = function()
        {
        	this.gf_codeComListLoad("ds_hos",  "ds_hos",   "N", "", "", "fn_callback", "M01"); 			//병원코드
        	this.gf_codeComListLoad("ds_subject",  "ds_subject",   "N", "", "", "fn_callback", "I01"); 	//과목코드
        	this.gf_codeComListLoad("ds_prog",  "ds_prog",   "N", "", "", "fn_callback", "G02"); 		//진행코드
        	this.gf_codeComListLoad("ds_injuryCode",  "ds_injuryCode",   "N", "", "", "fn_callback", "J01"); 		//진행코드
        }

        //소송관리번호 검색
        this.Button_numSearch_onclick = function(obj,e)
        {
        	this.Button_phySave.set_enable(false);
        	this.ds_phyAprs.clearData();
        	this.ds_examination.clearData();
        	this.ds_injury.clearData();
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
        		
        		trace("쇼모달 : " + lawsuitAdmNo);
        		trace("쇼모달 : " + instAdmCode);
        		
        		
        		var newRow = this.ds_search.addRow();
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        		
        		
        		this.getSimInfo();
        //		this.onBtnFunc(true);	
        	}
        	else if (modalId == "examModal"){
        		
        		var nRow = this.ds_injury.insertRow(0);
        	
        		//var thisRow = this.ds_injury.rowposition;
        		var tmpSerialSeq = this.ds_search.getColumn(0,"examinationSerialSeq");
        		
        		this.ds_injury.setColumn(nRow, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        		this.ds_injury.setColumn(nRow, "instAdmCode", this.Combo_sim.value);
        		this.ds_injury.setColumn(nRow, "phyAprsCode", this.Combo_count.value);
        		this.ds_injury.setColumn(nRow, "examinationSerialSeq", tmpSerialSeq != null ? tmpSerialSeq : "1");
        		
        		
        		
        		var injuryData = new Array();
        		
        		injuryData = variable.split(",");
        		
        		//var thisRow = this.ds_injury.rowposition;
        		this.ds_injury.setColumn(nRow, "injuryPositionCode", injuryData[0]);
        		this.ds_injury.setColumn(nRow, "injuryPositionFacts", injuryData[1]);
        		this.ds_injury.setColumn(nRow, "injuryPositionPaymentRate", injuryData[2]);
        	
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

        //회차 조회
        this.getPhyAprsCodeInfo = function(){
        	trace("======================회차조회======================");
        	this.gfn_transaction(this,
        			  "getPhyAprsCodeInfo",
        			  "exam/getPhyAprsCodeInfo.do",
        			  "ds_search=ds_search",
        			  "ds_phyAprsCode=ds_phyAprsCode",
        			  "",
        			  "fn_callback");
        }

        //TAB_PHY_APRS
        this.getPhyAprsInfo = function(){
        	trace("================getPhyAprsInfo=======================");
        	
        	var lawNo = this.ds_examination.getColumn(0, "lawsuitAdmNo");
        	var instCode = this.Combo_sim.value;
        	var aprs = this.Combo_count.value;

        	
        	var strParam ="" ;
        	
        	strParam += "lawsuit_adm_no=" + "\"" + lawNo+ "\"";
        	strParam += " inst_adm_no=" + "\"" + instCode + "\"";
        	strParam += " phy_aprs_code=" + "\"" + aprs + "\"";
        	
        	this.gfn_transaction(this,
        			  "getPhyAprs",
        			  "exam/phyAprsSelect.do",
        			  "ds_search=ds_search",
        			  "ds_phyAprs=ds_phyAprs",
        			  strParam,
        			  "fn_callback");			 
        }

        
        //TAB_EXAMINATION
        this.getExamInfo = function(){
        	
        	trace("===========================getExamInfo==============================");
        	
        	this.gfn_transaction(this,
        			  "getExam",
        			  "exam/examSelect.do",
        			  "ds_search=ds_search",
        			  "ds_examination=ds_examination",
        			  "",
        			  "fn_callback");
        	
        }

        //TAB_INJURY
        this.getInjury = function(){
        	
        	trace("===========================getInjury==============================");
        	
        	this.gfn_transaction(this,
        			  "getInjury",
        			  "exam/injurySelect.do",
        			  "ds_search=ds_search",
        			  "ds_injury=ds_output",
        			  "",
        			  "fn_callback");
        	
        }

        //콜백함수
        this.fn_callback = function(svcid,errcd,errmsg){
        	trace("===========fn_callback=========== : " + svcid);

        	if(svcid == "getPhyAprs"){
        		trace("콜백getPhyAprs");
        		
        		
        		if(this.gfn_IsNull(this.ds_phyAprs.getColumn(0, "phyAprsName"))){
        			
        			alert("신체감정를 시작합니다.");
        			
        			this.Button_phySave.set_enable(true);
        			//this.ds_phyAprs.addRow();
        			this.ds_examination.addRow();
        			
        			this.insertTrue(true);
        			
        			//this.ds_phyAprs.setColumn(0, "phyAprsCode", "001");
        			this.ds_examination.setColumn(0, "phyAprsCode", "001");
        			
        			this.Button_addData_onclick();
        			this.Combo_sim.set_index(0);
        			this.Combo_count.set_index(0);		
        			
        		}
        		else
        		{	
        			this.getPhyAprsCodeInfo();
        			
        		}
        		
        		
        	}
        	else if(svcid == "getExam"){
        		trace("콜백getExam");
        		
        		examinationSerialSeq = this.ds_examination.getColumn(0, "examinationSerialSeq");
        		this.ds_search.setColumn(0, "examinationSerialSeq", examinationSerialSeq);
        		this.getInjury();
        	}
        	else if(svcid == "getInjury"){
        		trace("콜백getInjury");
        		
        		this.Combo_sim.set_index(parseInt(instAdmCode)-1);
        		this.Combo_sim_onitemchanged(this.Combo_sim, {postvalue:instAdmCode});
        		
        		trace("dddd :: "+this.ds_phyAprsCode.saveXML());
        		//this.Combo_sim.set_index(0);		
        		//this.Combo_sim_onitemchanged(this.Combo_sim, {postvalue:"001"});
        		//trace("광훈 : " + this.ds_phyAprs.saveXML());
        		//trace("광훈 : " + this.ds_examination.saveXML());
        		//trace("광훈 : " + this.ds_injury.saveXML());
        		
        	}
        	else if(svcid == "getSimInfo"){
        		trace("콜백getSimInfo");
        		
        		this.getPhyAprsInfo();
        	}
        	else if(svcid == "phyAprsInsert"){
        		if(this.ds_examination.getRowType() != 1 ) {
        // 			this.ds_examination.setColumn(this.ds_examination.rowposition, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        // 			this.ds_examination.setColumn(this.ds_examination.rowposition, "instAdmCode", this.Combo_sim.value);
        // 			this.ds_examination.setColumn(this.ds_examination.rowposition, "phyAprsCode", this.Combo_count.value);
        			
        			// 이게 맞는것 같음.. examination이 심급의 회차별로 저장이 되지가 않음
        			this.ds_examination.setColumn(0, "instAdmCode", this.Combo_sim.value);
        			this.ds_examination.setColumn(0, "phyAprsCode", this.Combo_count.value);
        			
        			//TAB_EXAMINATION삽입
        			
        			this.gfn_transaction(this
        				,"examinationInsert"
        				,"exam/examSave.do"
        				,"ds_examination=ds_examination:U"
        				,""
        				,""
        				,"fn_callback");	
        		} else {
        			this.saveInjury();
        		}
        	}
        	else if(svcid == "examinationInsert"){
        // 		alert(this.ds_phyAprs.getRowType);
        // 		alert(this.ds_examination.getRowType);
        		
        		this.insertTrue(false);	
        		this.Button_phySave.set_enable(false);
        		
        		this.ds_search.setColumn(0, "phyAprsCode", this.ds_phyAprs.getColumn(0, "phyAprsCode"));

        		var thisRow = this.ds_injury.rowposition;
        		var tmpSeq = this.ds_search.getColumn(this.ds_examination.rowposition,"examinationSerialSeq");
        		if(this.gfn_IsNull(tmpSeq)){
        			tmpSeq = 1;
        		}
        		
        		this.ds_injury.setColumn(thisRow, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        		this.ds_injury.setColumn(thisRow, "instAdmCode", this.Combo_sim.value);
        		this.ds_injury.setColumn(thisRow, "phyAprsCode", this.Combo_count.value);
        		this.ds_injury.setColumn(thisRow, "examinationSerialSeq", tmpSeq);
        		
        // 		this.getPhyAprsInfo();
        // 		this.getSimInfo();
        		
        		
        		this.gfn_transaction(this
        					,"injurySave"
        					,"exam/injurySave.do"
        					,"ds_injury=ds_injury:U"
        					,""
        					,""
        					,"fn_callback");
        	
        		
        	} else if (svcid == "injurySave") {

        //		this.modal_callback("SearchModal", this.edit_lawsuitAdmNo.text + "" + "001");

        		
        		//this.Button_phySave.set_enable(false);
        // 		this.ds_phyAprs.clearData();
        // 		this.ds_examination.clearData();
        // 		this.ds_injury.clearData();
        //  	this.ds_search.clearData();
        // 		this.ds_phyAprs.clearData();
        // 		this.ds_examination.clearData();
        // 		this.ds_injury.clearData();

        		

        		
        	
        // 		var tmpSerial = examinationSerialSeq == null ? "1" : examinationSerialSeq;
        // 		
        // 		
        // 		this.ds_injury.setColumn(this.ds_injury.rowposition, "examinationSerialSeq", tmpSerial);
        // 		
        // 		this.gfn_transaction(this
        // 					,"injurySave"
        // 					,"exam/injurySave.do"
        // 					,"ds_injury=ds_injury:U"
        // 					,""
        // 					,""
        // 					,"");
        // 	
        // 	
        // 		this.ds_examination.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        // 		this.ds_examination.setColumn(0, "instAdmCode", instAdmCode);
        // 		//TAB_EXAMINATION삽입
        // 		
        // 		this.gfn_transaction(this
        // 			,"examinationInsert"
        // 			,"exam/examSave.do"
        // 			,"ds_examination=ds_examination:U"
        // 			,""
        // 			,""
        // 			,"fn_callback");
        	}
        	else if(svcid == "getPhyAprsCodeInfo")
        	{
        		for(var i=0; i<this.ds_phyAprsCode.rowcount; i++){
        			var codeNo = this.ds_phyAprsCode.getColumn(i,"codeNo");
        			this.ds_phyAprsCode.setColumn(i, "rowNum" , parseInt(codeNo));			
        		}
        		
        		phyAprsCode = this.ds_phyAprs.getColumn(0, "phyAprsCode");
        		this.ds_search.setColumn(0, "phyAprsCode", phyAprsCode);
        		this.getExamInfo();

        		
        	}
        	
        }

        

        

        //초기화 버튼
        this.Button_reload_onclick = function(obj,e)
        {
         	trace("초기화~");
        	
        	//현재 페이지를 새로고침하여 초기화
        	this.reload();
        }

        
        //추가 버튼
        this.Button_addRow_onclick = function(obj,e)
        {
        	
        	if(this.ds_search.getColumn(0,"lawsuitAdmNo") == undefined){
        		application.alert("데이터를 먼저 검색하세요");
        		return false;
        	}
        	
        // 	this.ds_injury.addRow();
        // 	
        // 	var thisRow = this.ds_injury.rowposition;
        // 	var tmpSerialSeq = this.ds_search.getColumn(0,"examinationSerialSeq");
        // 	
        // 	this.ds_injury.setColumn(thisRow, "lawsuitAdmNo", this.ds_search.getColumn(0,"lawsuitAdmNo"));
        // 	this.ds_injury.setColumn(thisRow, "instAdmCode", this.ds_search.getColumn(0,"instAdmCode"));
        // 	this.ds_injury.setColumn(thisRow, "phyAprsCode", this.ds_search.getColumn(0,"phyAprsCode"));
        // 	this.ds_injury.setColumn(thisRow, "examinationSerialSeq", tmpSerialSeq != null ? tmpSerialSeq : "1");
        	
        	
        	 var lawSearchNo = "";	//소송관리번호 검색값
        	 
        	 //모달 창이 나올 좌표 값을 설정한다
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 //새로운 모달 창을 띄우기 위한 객체 선언
        	 var newChild = new ChildFrame;
        	 
        	 //새로운 플러그인(모달)을 생성한 후 초기화 시키는 메소드
        	 //매개변수 : '플러그인명', 좌표형태, 생성위치x좌표, 생성위치y좌표,
        	 //				sizeWidth, sizeHeight, 포지션 좌표x, 포지션 y좌표
        	 newChild.init("examModal"
        					, "absolute", nLeft, nTop, 400, 250, null, null
        					, "exam::examModal.xfdl");
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

        
        //닫기버튼
        this.Button_close_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        
        //저장버튼
        this.Button_save_onclick = function(obj,e)
        {
        	
        	if(this.gfn_IsNull(this.edit_lawsuitAdmNo.text)){
        		alert("먼저 소송관리번호를 검색해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_name.text)){
        		alert("피감정인명을 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Combo_subject.value)){
        		alert("과목코드를 선택해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_doc.text)){
        		alert("감정의를 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Calendar_examTime.value)){
        		alert("감정일시를 선택해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Combo_prog.value)){
        		alert("진행상태를 선택해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Calendar_reDate.value)){
        		alert("신체감정신청일을 선택해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Calendar_examDate.value)){
        		alert("신체감정일을 선택해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Calendar_getDate.value)){
        		alert("감정일을 선택해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_mine.text)){
        		alert("당사인인정급수를 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_your.text)){
        		alert("상대방주장급수를 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_result.text)){
        		alert("감정결과를 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Edit_disease.text)){
        		alert("병명을 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Txt_diseasePoin.value)){
        		alert("장해내용을 작성해주세요.");
        		return;
        	} else if(this.gfn_IsNull(this.Combo_hos.value)){
        		alert("감정병원을 선택해주세요.");
        		return; 
        	}

        	
        	var saveConfirm = application.confirm("해당 데이터를 저장하시겠습니까?", "확인");
        	
        	if(saveConfirm){
        		this.Button_phySave_onclick();
        		
        		
        // 		if(this.ds_search.getColumn(0,"lawsuitAdmNo") == undefined){
        // 			application.alert("데이터를 먼저 검색하세요");
        // 			return false;
        // 		}
        		
        // 		var tmpSerial = examinationSerialSeq == null ? "1" : examinationSerialSeq;
        // 		
        // 		
        // 		this.ds_injury.setColumn(this.ds_injury.rowposition, "examinationSerialSeq", tmpSerial);
        // 		
        // 		this.gfn_transaction(this
        // 					,"injurySave"
        // 					,"exam/injurySave.do"
        // 					,"ds_injury=ds_injury:U"
        // 					,""
        // 					,""
        // 					,"");
        		
         	} else {
        		return null;
         	}
        }

        //삭제버튼
        this.Button_del_onclick = function(obj,e)
        {

        	if(this.ds_injury.rowcount==0){
        		application.alert("삭제 할 데이터가 없습니다");
        		return false;
        	}

        	var thisRow = this.ds_injury.rowposition;
        	this.ds_injury.setColumn(thisRow, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        	this.ds_injury.setColumn(thisRow, "instAdmCode", this.Combo_sim.value);
        	this.ds_injury.setColumn(thisRow, "phyAprsCode", this.Combo_count.value);
        	this.ds_injury.setColumn(thisRow, "examinationSerialSeq", this.ds_examination.getColumn(this.ds_examination.rowposition,"examinationSerialSeq"));
        	
        	
        	
        	var delConfirm=application.confirm("해당 데이터를 삭제하시겠습니까?", "확인");
        	
        	if(delConfirm){
        		this.ds_injury.deleteRow(thisRow);
        		this.gfn_transaction(this
        			,"injuryDel"
        			,"exam/injurySave.do"
        			,"ds_injury=ds_injury:U"
        			,""
        			,""
        			,"fn_callback");	
        	}

        }

        //신체감정 저장
        this.Button_phySave_onclick = function(obj,e)
        {
        	if(this.Combo_subject.value==undefined ||
        		this.Edit_doc.value==undefined || 
        		this.Calendar_examTime==undefined ||
        		this.Combo_prog==undefined ||
        		this.Calendar_reDate==undefined ||
        		this.Calendar_examDate==undefined ||
        		this.Calendar_getDate==undefined ||
        		this.Edit_mine==undefined ||
        		this.Edit_your==undefined ||
        		this.Edit_result==undefined ||
        		this.Edit_disease==undefined ||
        		this.Txt_diseasePoin==undefined ||
        		this.Edit_name==undefined ||
        		this.Combo_hos==undefined ||
        		this.Edit_AccdCont==undefined)
        	{
        		alert("우선 신체감정 내용부터 작성해주세요.");
        		return;
        	}
        	else{
        		//TAB_PHY_APRS삽입
        		
        // 		var saveConfirm=application.confirm("해당 데이터를 저장하시겠습니까?", "확인");
        // 		
        // 		if(saveConfirm){

        

        		if(this.ds_phyAprs.getRowType() != 1){
        		
        			this.Button_phySave.set_enable(false);
        // 			this.ds_phyAprs.setColumn(this.ds_phyAprs.rowposition, "lawsuitAdmNo", lawsuitAdmNo);
        // 			this.ds_phyAprs.setColumn(this.ds_phyAprs.rowposition, "instAdmCode", instAdmCode);
        			
        			// 이게 맞는것 같음.. examination이 심급의 회차별로 저장이 되지가 않음
        			this.ds_phyAprs.setColumn(this.ds_phyAprs.rowposition, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        			this.ds_phyAprs.setColumn(this.ds_phyAprs.rowposition, "instAdmCode", this.Combo_sim.value);
        			this.ds_phyAprs.setColumn(this.ds_phyAprs.rowposition, "phyAprsCode", this.Combo_count.value);
        			
        			//alert("??????????????????" + this.ds_phyAprs.saveXML());
        			
        			this.gfn_transaction(this
        				,"phyAprsInsert"
        				,"exam/phySave.do"
        				,"ds_phyAprs=ds_phyAprs:U"
        				,""
        				,""
        				,"fn_callback");
        		} else {
        		
        			this.examSave();
        		}
        //		}

        	}
        	
        }

        //신체감정 enable - true, false함수
        this.insertTrue = function(bol){
        // 	if(bol==true)
        // 	{
        // 		this.Combo_subject.set_enable(true);
        // 		this.Edit_doc.set_enable(true);
        // 		this.Calendar_examTime.set_enable(true);
        // 		this.Combo_prog.set_enable(true);
        // 		this.Calendar_reDate.set_enable(true);
        // 		this.Calendar_examDate.set_enable(true);
        // 		this.Calendar_getDate.set_enable(true);
        // 		this.Edit_mine.set_enable(true);
        // 		this.Edit_your.set_enable(true);
        // 		this.Edit_result.set_enable(true);
        // 		this.Edit_disease.set_enable(true);
        // 		this.Txt_diseasePoin.set_enable(true);
        // 		this.Edit_name.set_enable(true);
        // 		this.Combo_hos.set_enable(true);
        // 		this.Edit_AccdCont.set_enable(true);
        // 	}else{
        // 		this.Combo_subject.set_enable(false);
        // 		this.Edit_doc.set_enable(false);
        // 		this.Calendar_examTime.set_enable(false);
        // 		this.Combo_prog.set_enable(false);
        // 		this.Calendar_reDate.set_enable(false);
        // 		this.Calendar_examDate.set_enable(false);
        // 		this.Calendar_getDate.set_enable(false);
        // 		this.Edit_mine.set_enable(false);
        // 		this.Edit_your.set_enable(false);
        // 		this.Edit_result.set_enable(false);
        // 		this.Edit_disease.set_enable(false);
        // 		this.Txt_diseasePoin.set_enable(false);
        // 		this.Edit_name.set_enable(false);
        // 		this.Combo_hos.set_enable(false);
        // 		this.Edit_AccdCont.set_enable(false);
        // 	}
        }

        //회차추가
        this.Button_addData_onclick = function(obj,e)
        {
        	if(this.ds_search.getColumn(0,"lawsuitAdmNo") == undefined){
        		application.alert("데이터를 먼저 검색하세요");
        		return false;
        	}
        	
        	this.addPhy(this.Combo_sim.value);
        	
        // 	var rCount = this.ds_phyAprsCode.rowcount;
        // 	var maxVal = this.ds_phyAprsCode.getColumn(rCount-1, "codeNo");
        // 	var maxNum = maxVal != null ? parseInt(maxVal) : 0;
        // 	maxNum = maxNum + 1 ;
        // 
        // 	var strNum = maxNum.toString();
        // 	if(strNum.length==1){
        // 		strNum = "00" + strNum;
        // 	}else if(strNum.length==2){
        // 		strNum = "0" + strNum;
        // 	}
        // 	
        // 	alert("회차를 추가합니다.");
        // 	
        // 	
        // 	this.Button_phySave.set_enable(true);
        // 	this.Edit_name.set_enable(true);
        // 	this.Combo_hos.set_enable(true);
        // 	this.Edit_AccdCont.set_enable(true);
        // 	
        // // 	this.ds_phyAprs.clearData();
        // // 	this.ds_injury.clearData();
        // 	
        // 	this.ds_search.setColumn(0,"phyAprsCode",strNum);
        // 
        // 	this.ds_phyAprsCode.addRow();
        // 	this.ds_phyAprsCode.setColumn(this.ds_phyAprsCode.rowcount-1, "codeNo", strNum);
        // 	this.ds_phyAprsCode.setColumn(this.ds_phyAprsCode.rowcount-1, "codeName", maxNum+"차");
        // 	
        // 	this.ds_phyAprs.addRow();
        // 	this.ds_phyAprs.setColumn(0, "phyAprsCode", strNum);
        // 	
        // 	
        // 
        // // 		2020.02.04 최광훈
        // //		과목코드 ~ 장해내용은 리셋 X
        // // 		this.ds_examination.clearData();
        // // 		this.ds_examination.addRow();
        // // 		this.ds_examination.setColumn(0, "phyAprsCode", strNum);
        // 	
        // 	
        // 	this.insertTrue(true);
        // 	
        // 	this.Combo_count.set_index(maxVal);
        // 	this.Edit_name.set_enable(true);
        // 	this.Edit_AccdCont.set_enable(true);
        // 	this.Combo_hos.set_enable(true);

        }

        this.examSave = function() {
        // 		alert(this.ds_phyAprs.getRowType());
        // 		alert(this.ds_examination.getRowType());
        // 		alert(this.ds_injury.getRowType());
        	
        	if(this.ds_examination.getRowType() != 1 ) {

        // 		this.ds_examination.setColumn(this.ds_examination.rowposition, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        // 		this.ds_examination.setColumn(this.ds_examination.rowposition, "instAdmCode", this.Combo_sim.value);
        // 		this.ds_examination.setColumn(this.ds_examination.rowposition, "phyAprsCode", this.Combo_count.value);
        			
        			// 이게 맞는것 같음.. examination이 심급의 회차별로 저장이 되지가 않음
        			this.ds_examination.setColumn(0, "instAdmCode", this.Combo_sim.value);
        			this.ds_examination.setColumn(0, "phyAprsCode", this.Combo_count.value);
        			
        		//TAB_EXAMINATION삽입
        		
        		this.gfn_transaction(this
        			,"examinationInsert"
        			,"exam/examSave.do"
        			,"ds_examination=ds_examination:U"
        			,""
        			,""
        			,"fn_callback");	
        	} else {
        		this.saveInjury();
        	}
        }

        this.saveInjury = function() {

        	this.insertTrue(false);	
        	this.Button_phySave.set_enable(false);
        	
        	this.ds_search.setColumn(0, "phyAprsCode", this.ds_phyAprs.getColumn(0, "phyAprsCode"));
        	
        	var thisRow = this.ds_injury.rowposition;
        	var tmpSeq = this.ds_search.getColumn(this.ds_examination.rowposition,"examinationSerialSeq");
        	if(this.gfn_IsNull(tmpSeq)){
        		tmpSeq = 1;
        	}	
        	
        	this.ds_injury.setColumn(thisRow, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        	this.ds_injury.setColumn(thisRow, "instAdmCode", this.Combo_sim.value);
        	this.ds_injury.setColumn(thisRow, "phyAprsCode", this.Combo_count.value);
        	this.ds_injury.setColumn(thisRow, "examinationSerialSeq", tmpSeq);
        	
        // 	this.getPhyAprsInfo();
        // 	this.getSimInfo();
        	
        	
        	this.gfn_transaction(this
        				,"injurySave"
        				,"exam/injurySave.do"
        				,"ds_injury=ds_injury:U"
        				,""
        				,""
        				,"fn_callback");
        }

        this.Combo_sim_onitemchanged = function(obj,e)
        {
        	//alert(this.ds_phyAprsCode.saveXML());
        	
        	//trace("필터링 전 :: " + this.ds_phyAprs.saveXML());
        	this.ds_phyAprs.filter("instAdmCode=='"+ e.postvalue +"'");
        	this.ds_injury.filter("instAdmCode=='"+ e.postvalue +"'");
        	//this.ds_phyAprsCode.filter(1);
        	//trace("필터링 후 :: " + this.ds_phyAprs.saveXML());
        	
        	this.ds_phyAprs.set_rowposition(0);
        	this.ds_injury.set_rowposition(0);
        	
        	var rCnt = this.ds_phyAprs.getRowCount();
        	this.ds_phyAprsCode.filter("rowNum <= " + rCnt);
        	
        	trace("광훈14 :: " + this.ds_phyAprs.filterstr);
        	trace("광훈13 :: " + this.ds_phyAprs.saveXML());
        	trace("광훈12 :: " + e.postvalue);
        	trace("광훈14 :: " + rCnt);
        	if(rCnt == 0) {
        		//this.ds_phyAprsCode.clearData();
        		this.addPhy(e.postvalue);
        	}
        	
        	this.Combo_count.set_index(0);
        	this.Combo_count_onitemchanged(this.Combo_count, {postvalue:"001"});
        }

        this.Combo_count_onitemchanged = function(obj,e)
        {
        	var strArr1 = (this.ds_phyAprs.filterstr).split(' && ');
        	var strArr2 = (this.ds_injury.filterstr).split(' && ');
        	
        	this.ds_phyAprs.filter(strArr1[0]+" && phyAprsCode=='"+ e.postvalue +"'");
        	this.ds_injury.filter(strArr1[0]+" && phyAprsCode=='"+ e.postvalue +"'");
        	this.ds_examination.filter(strArr1[0]+" && phyAprsCode=='"+ e.postvalue +"'");
        	
        	this.ds_phyAprs.set_rowposition(0);
        	this.ds_injury.set_rowposition(0);
        	this.ds_examination.set_rowposition(0);
        	
        	//alert(this.ds_injury.saveXML());
        	
        }

        this.addPhy = function(val) {
        	var rCount = this.ds_phyAprsCode.rowcount;
        	var maxVal = this.ds_phyAprsCode.getColumn(rCount-1, "codeNo");
        	var maxNum = (maxVal != null ? parseInt(maxVal) : 0);
        	maxNum = maxNum + 1 ;

        	var strNum = maxNum.toString();
        	if(strNum.length==1){
        		strNum = "00" + strNum;
        	}else if(strNum.length==2){
        		strNum = "0" + strNum;
        	}
        	
        	alert("회차를 추가합니다.");
        	
        	
        	this.Button_phySave.set_enable(true);
        	this.Edit_name.set_enable(true);
        	this.Combo_hos.set_enable(true);
        	this.Edit_AccdCont.set_enable(true);
        	
          	//this.ds_phyAprs.clearData();
        	//this.ds_injury.clearData();
        	//this.ds_examination.clearData();
        	
        	this.ds_search.setColumn(0,"phyAprsCode",strNum);

        	var cRow = this.ds_phyAprsCode.addRow();
        	this.ds_phyAprsCode.setColumn(cRow, "codeNo", strNum);
        	this.ds_phyAprsCode.setColumn(cRow, "codeName", maxNum+"차");
        	this.ds_phyAprsCode.set_rowposition(cRow);
        	this.Combo_count.set_index(this.ds_phyAprsCode.getRowCount() - 1);
        	
        	var nRow = this.ds_phyAprs.insertRow(0);
        	this.ds_phyAprs.setColumn(nRow, "phyAprsCode", this.Combo_count.value);
        	this.ds_phyAprs.setColumn(nRow, "instAdmCode", val);
        	this.ds_phyAprs.set_rowposition(nRow);
        	
        	var eRow = this.ds_examination.insertRow(0);
        	this.ds_examination.set_rowposition(eRow);
        	this.ds_examination.setColumn(eRow, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        	this.ds_examination.setColumn(eRow, "instAdmCode", this.Combo_sim.value);
        	this.ds_examination.setColumn(eRow, "phyAprsCode", this.Combo_count.value);
        	
        //	this.ds_injury.clearData();
        	
        //  	var iRow = this.ds_injury.insertRow(0);
        //  	this.ds_injury.set_rowposition(iRow);
        // 	this.ds_injury.setColumn(iRow, "lawsuitAdmNo", this.edit_lawsuitAdmNo.text);
        // 	this.ds_injury.setColumn(iRow, "instAdmCode", this.Combo_sim.value);
        //  	this.ds_injury.setColumn(iRow, "phyAprsCode" , this.Combo_count.value);
         	
         	this.ds_injury.filter("instAdmCode=='" + this.Combo_sim.value + "' && phyAprsCode=='" + this.Combo_count.value + "'");
         	
         	//this.ds_injury.deleteRow(iRow);
        	
        	
        	
        // 	var aRow = this.ds_injury.insertRow(0);
        // 	this.ds_injury.set_rowposition(aRow);
        	
        	//trace("확인 :: "+nRow);
        	//trace("허 :: "+this.ds_phyAprs.saveXML());

        // 		2020.02.04 최광훈
        //		과목코드 ~ 장해내용은 리셋 X
        // 		this.ds_examination.clearData();
        // 		this.ds_examination.addRow();
        // 		this.ds_examination.setColumn(0, "phyAprsCode", strNum);
        	
        	
        	//this.insertTrue(true);
        	
        	//this.Combo_count.set_index(maxVal);
        	//this.Edit_name.set_enable(true);
        	//this.Edit_AccdCont.set_enable(true);
        	//this.Combo_hos.set_enable(true);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_REC_onload, this);
            this.Button_reload.addEventHandler("onclick", this.Button_reload_onclick, this);
            this.Combo_sim.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Button_del.addEventHandler("onclick", this.Button_del_onclick, this);
            this.Button_addRow.addEventHandler("onclick", this.Button_addRow_onclick, this);
            this.Button_save.addEventHandler("onclick", this.Button_save_onclick, this);
            this.Button_close.addEventHandler("onclick", this.Button_close_onclick, this);
            this.Combo_count.addEventHandler("onitemchanged", this.Combo_count_onitemchanged, this);
            this.Button_phySave.addEventHandler("onclick", this.Button_phySave_onclick, this);
            this.Button_addData.addEventHandler("onclick", this.Button_addData_onclick, this);

        };

        this.loadIncludeScript("Exam.xfdl");

       
    };
}
)();
