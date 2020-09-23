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
                this.set_name("RAISREQ_REP");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_raisreq_wtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">선택 </Col></Row><Row><Col id=\"codeName\">미회신</Col><Col id=\"codeNo\">N</Col></Row><Row><Col id=\"codeNo\">Y</Col><Col id=\"codeName\">회신</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">선택 </Col></Row><Row><Col id=\"codeName\">불가</Col><Col id=\"codeNo\">N</Col></Row><Row><Col id=\"codeName\">가능</Col><Col id=\"codeNo\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clas_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRea\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_codename", this);
            obj._setContents("<ColumnInfo><Column id=\"codename\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">001</Col><Col id=\"codename\">구상 </Col></Row><Row><Col id=\"codeno\">002</Col><Col id=\"codename\">의료과실 </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_openlaw", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">1006</Col><Col id=\"MENU_NM\">소송접수관리</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">lawsuit</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col><Col id=\"PGM_ID\">LAWSUIT_LIST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer05", "absolute", "14", "372", "996", "297", null, null, this);
            obj.set_taborder("1");
            obj.set_text("ImageViewer01");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer14", "absolute", "60", "402", "944", "66", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer23", "absolute", "60", "467", "944", "66", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer24", "absolute", "60", "532", "944", "66", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer25", "absolute", "60", "597", "944", "66", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "60", "378", "944", "25", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("ImageViewer01");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "117", "169", "23", null, null, this);
            obj.set_text("소제기 의뢰 정보");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03", "absolute", "14", "146", "996", "190", null, null, this);
            obj.set_taborder("1");
            obj.set_text("ImageViewer01");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#000000ff");
            obj.style.set_opacity("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "343", "169", "23", null, null, this);
            obj.set_text("소제기 회신 결과");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06", "absolute", "60", "151", "944", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer07", "absolute", "20", "151", "115", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("의뢰자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer08", "absolute", "60", "175", "944", "76", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer09", "absolute", "60", "250", "944", "81", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer10", "absolute", "20", "175", "115", "76", null, null, this);
            obj.set_taborder("1");
            obj.set_text("소송제기사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer11", "absolute", "20", "250", "115", "81", null, null, this);
            obj.set_taborder("1");
            obj.set_text("기타의뢰사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer12", "absolute", "351", "151", "115", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("소송제기분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer13", "absolute", "674", "151", "115", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Req_ID", "absolute", "140", "154", "140", "19", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_Clas_Code", "absolute", "471", "154", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_innerdataset("@ds_codename");
            obj.set_datacolumn("codename");
            obj.set_codecolumn("codeno");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Calendar("cal_Req_Date", "absolute", "794", "154", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_type("normal");
            obj.set_readonly("true");

            obj = new ImageViewer("ImageViewer15", "absolute", "20", "378", "105", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_Rep_Wtr", "absolute", "130", "381", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_innerdataset("@ds_raisreq_wtr");
            obj.set_datacolumn("codeName");
            obj.set_codecolumn("codeNo");
            obj.set_index("-1");

            obj = new ImageViewer("ImageViewer16", "absolute", "267", "378", "105", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("회신일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer17", "absolute", "512", "378", "105", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("소송가능여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer18", "absolute", "756", "378", "105", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("소송제기예상일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Rep_Data", "absolute", "377", "381", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_type("normal");
            obj.set_expr("comp.parent.fn_today()");

            obj = new Combo("combo_Wtr", "absolute", "622", "383", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_innerdataset("@ds_wtr");
            obj.set_datacolumn("codeName");
            obj.set_codecolumn("codeNo");
            obj.set_index("-1");

            obj = new Calendar("cal_Expt_Data", "absolute", "866", "381", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_type("normal");

            obj = new ImageViewer("ImageViewer21", "absolute", "20", "532", "105", "66", null, null, this);
            obj.set_taborder("1");
            obj.set_text("기타요구사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer19", "absolute", "20", "467", "105", "66", null, null, this);
            obj.set_taborder("1");
            obj.set_text("쟁점사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer20", "absolute", "20", "402", "105", "66", null, null, this);
            obj.set_taborder("1");
            obj.set_text("회신내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer22", "absolute", "20", "597", "105", "66", null, null, this);
            obj.set_taborder("1");
            obj.set_text("불가사유내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "36", "424", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 14 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "36", "489", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Rea", "absolute", "140", "178", "858", "70", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("1000");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Etc_Point", "absolute", "140", "253", "858", "75", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("1500");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Rep_Cont", "absolute", "130", "405", "868", "60", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("2000");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_lssu_Point", "absolute", "130", "470", "868", "60", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("1000");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_EtcReq_Poin", "absolute", "130", "535", "868", "60", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("1500");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Dalw_Cont", "absolute", "130", "600", "868", "60", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("1500");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("  소제기 의뢰 회신");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "287", "71", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #513fffff 0,100 #0011fcff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clean", "absolute", "941", "71", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #513fffff 0,100 #0011fcff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "894", "676", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #513fffff 0,100 #0011fcff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "676", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #513fffff 0,100 #0011fcff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_LawSuit", "absolute", "947", "342", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("소송하기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("RAISREQ_REP");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_Req_ID","value","ds_raisreq","lawRaisreqReqId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","combo_Clas_Code","value","ds_raisreq","lawRaisreqClasCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_Req_Date","value","ds_raisreq","lawRaisreqReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","ta_Rea","value","ds_raisreq","lawRaisreqRea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","ta_Etc_Point","value","ds_raisreq","lawRaisreqEtcPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","combo_Rep_Wtr","value","ds_raisreq","lawRaisreqRepWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cal_Rep_Data","value","ds_raisreq","lawRaisreqRepDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","combo_Wtr","value","ds_raisreq","lawRaisreqWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","ta_Rep_Cont","value","ds_raisreq","lawRaisreqRepCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","ta_lssu_Point","value","ds_raisreq","lawRaisreqIssuPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","ta_EtcReq_Poin","value","ds_raisreq","lawRaisreqEtcreqPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","ta_Dalw_Cont","value","ds_raisreq","lawRaisreqDalwCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cal_Expt_Data","value","ds_raisreq","lawRaisreqExptDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_No","value","ds_raisreq","lawRaisreqNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("RAISREQ_REP.xfdl", "Lib::common.xjs");
        this.registerScript("RAISREQ_REP.xfdl", function() {
        //include "Lib::common.xjs";

        // 초기화면
        this.RAISREQ_REP_onload = function(obj,e)
        {
        	// 초기 버튼 false
        	this.btn_LawSuit.set_visible(false); // 소송하기 없애기
        	this.cal_Rep_Data.set_enable(false);	// 회신일자
        	this.combo_Wtr.set_enable(false);// 소송가능여부
        	this.cal_Expt_Data.set_enable(false);// 소송제기예상일자
        	this.ta_Rep_Cont.set_enable(false);// 회신내용
        	this.ta_lssu_Point.set_enable(false);// 쟁점사항
        	this.ta_EtcReq_Poin.set_enable(false);// 기타요구사항
        	this.ta_Dalw_Cont.set_enable(false);// 불가사유내용
        	
        	this.gf_classCodeListLoad("ds_clas_code", "ds_clas_code", "Y", "fnCallBack", "D01"); // 공통코드(소송제기분류)조회
        	
        	var v_Param = this.gfn_getMainParams();	
        	
        	if(!this.gfn_IsNull(v_Param)){
        		this.ds_raisreq.clearData();
        		//this.getRaisreqList(v_Param[0]);
        	}
        	else{
        	
        		//this.ds_raisreq_wtr.addRow();
        		//var lawRaisreqRepWtr = this.ds_raisreq.getColumn(1,"lawRaisreqRepWtr");
        		// cal_req_date.value = this.gfn_Today();
        		
        		//this.ds_raisreq_wtr.setColumn(1, "lawRaisreqRepWtr", lawRaisreqRepWtr);
        	}
        	

        	

        }

        // 소제기의뢰번호 검색
        this.btn_search_onclick = function(obj,e)
        {
        	var v_argParm = new Array(); // 배열선언
            v_argParm[0] = '';
        	//	팝업화면 
        	//var v_rtnArr =  this.gf_dialog("RAISREQ_REG", "rais::POP_RAISREQ_SCH.xfdl", 0, 0, 700, 600, "", "Middle center",{objArguments:v_argParm});
        	
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	
        	// 차일드 프레임 생성 및 모달 창 출력
        	var newChild = new ChildFrame;
        	newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "rais::POP_RAISREQ_SCH.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	
        	
        	/*if(!this.gfn_IsNull(v_rtnArr))
        	{
        		this.ds_raisreq.setColumn(this.ds_raisreq.rowposition, "lawRaisreqNo", v_rtnArr[1]);
        		this.ds_raisreq.setColumn(this.ds_raisreq.rowposition, "lawRaisreqRepWtr", v_rtnArr[2]);
        	}
        	// 팝업에서 가져온 값을 해당되는 위치에 대입 (단 조건값은 팝업에 위치한 배열값과 일치해야)
        	if(!this.gfn_IsNull(v_rtnArr))
        	{
        		this.getRaisreqList(v_rtnArr[0]);
        	}*/
        }

        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	trace(variant);
        	if(strID == "Popup1")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		
        		if(this.ds_raisreq_temp.getRowCount > 0) {
        			this.ds_raisreq_temp.clearData();
        		}
        		
        		this.modal_selectRais(variant);
        	}
        }

        // 소제기 번호 지정 후 자동조회
        this.modal_selectRais = function(variant)
        {
        	var strParam  = "lawRaisreqNo=" +"\""+variant+"\"";
        	trace(strParam);
        	
        	this.gfn_transaction(this,
        						"getRaisreqView",
        						"rais/getRaisreqView.do",
        						"",
        						"ds_raisreq=ds_output, ds_codename=ds_output2",
        						strParam,
        						"fnCallBack"
        						);
        	
        }

        /*********************************************************
         소제기의뢰사항 조회
         **********************************************************/
        this.getRaisreqList = function(param){

        	var strSvcid 		= "getRaisreqDetail";
        	var strController 	= "/rais/getRaisreqDetail.do";
        	var strParam 		= "lawRaisreqNo=" + param;
        	
        	this.ds_raisreq.setColumn(this.ds_raisreq.rowposition,"lawRaisreqRepWtr",0);
        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"", 
        					"ds_raisreq=ds_output",
        					strParam, 
        					"fnCallBack"
        					);
        	
        }

        this.save_legal = function(Svcid){
        	// 저장로직
        	var strSvcid = Svcid;
        	var strController = "legalAd/LegalAd/saveLegalAd.do";
        	var strParam = "";
        			
        	this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_legal:U"
        					,"ds_legal=ds_output"
        					,strParam
        					,"fnCallback");
        }

        //소제기 수정
        this.updateRaisreqRep = function(){
        	var strSvcid = "updateRaisreqRep";
        	var strController = "/rais/updateRaisreqRep.do";
        	var strParam = "";
        	
        	this.ds_raisreq.setColumn("DataSetRowType",2); //DataSetRowType == int DataSet.ROW_TYPE_UPDATED(2)
        	
        	this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_raisreq:U" // "ds_input=ds_raisreq:A"
        					,""
        					,strParam,
        					"fnCallBack");
        	
        }

        //트랜젝션 콜백
        this.fnCallBack = function(sSvcId,nErrorCode,sErrorMsg){

        	if (nErrorCode < 0)
        	{		
        		alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	if(this.combo_Wtr.get_value == "Y"){
        	}
        	
        	
        	
        	switch (sSvcId)
        	{
        		case "getRaisreqView":		// 조회
        			// trace("case getRaisreqList :"+this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqNo"));
        			// trace("case getRaisreqList :"+this.ds_def.getRowCount());
        			
        			// fn_getRaisdef(this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqNo"));
        			
        			/*	if(combo_Rep_Wtr.value != ""){
        				this.ds_raisreq.setColumn(this.ds_raisreq.rowposition,"lawRaisreqRepWtr",combo_Rep_Wtr.value);
        			}	*/
        			//var strLength1 = this.ta_Rep_Cont.getLength();
        			//this.reply_text_num.set_text(strLength1);
        			//var strLength2 = this.ta_lssu_Point.getLength();
        			//this.debate_text_num.set_text(strLength2);
        			//var strLength3 = this.ta_EtcReq_Poin.getLength();
        			//this.other_text_num.set_text(strLength3);
        			//var strLength4 = this.ta_Dalw_Cont.getLength();
        			//this.no_text_num.set_text(strLength4);
        			
        			//alert("조회완료");
        			//var edtLawRaisreqRepWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqRepWtr");	// 회신여부
        			var edtLawRaisreqWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqWtr");	// 회신여부
        			
        			if(edtLawRaisreqWtr == "Y")
        			{
        				//alert("소제기 여부 Y");
        				this.btn_LawSuit.set_visible(true); // 소송하기 버튼 없애기
        			}
        			else
        			{
        				//alert("소제기 여부 N");
        				this.btn_LawSuit.set_visible(false); // 소송하기 버튼 없애기
        			}
        			
        			
        			
        			
        			break;
        			
        		case "getMgrList":		// 
        			alert("저장되었습니다.");
        			break;
        			
        		case "getRaisreqDefList":
        			// trace(this.ds_def.saveXML());
        			break;
        		
        		case "insertDefAll":
        			trace(this.ds_raisreq.saveXML());
        			alert("저장되었습니다.");
        			break;
        			
        		case "updateRaisreqRep":
        			alert("저장되었습니다.");
        			var param = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqNo");
        			this.modal_selectRais(param);		
        			
        			break;
        	}
        }
        this.btn_save_onclick = function(obj,e)
        {
        	//var test = this.ds_raisreq.getColumn(0, "lawRaisreqClasCode");
        	//trace("test ::"+test);
        	
        	//this.combo_Clas_Code.set_value(test);
        	
        	//alert(test);
        	
        	if(!(this.gfn_IsNull(this.edt_No.value))){
        	
        		if(this.combo_Rep_Wtr.value == 'Y'){
        			if(this.ta_Rep_Cont.getLength() < 1) {
        				this.alert("회신내용을 입력해주세요");
        			}else if(this.ta_lssu_Point.getLength() < 1){
        				this.alert("쟁점사항을 입력해주세요");
        			}else{
        				this.updateRaisreqRep();
        			}
        		}else if(this.combo_Rep_Wtr.value == 'N'){
        			this.updateRaisreqRep();
        		}
        	}
        	
        	
        }

        this.btn_clean_onclick = function(obj,e)
        {
        	
        	this.reload();
        }

        

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //텍스트 길이 검사 및 표시
        /*this.textarea_ontextchanged = function(obj:TextArea,  e:nexacro.TextChangedEventInfo)
        {	
        	var strText ="";
        	var maxlth ="";
        	
        	if(obj.name == "ta_Rep_Cont"){
        		strText= this.ta_Rep_Cont.text;
        		maxlth= this.ta_Rep_Cont.maxlength;
        	}else if(obj.name == "ta_lssu_Point"){
        		strText= this.ta_lssu_Point.text;
        		maxlth= this.ta_lssu_Point.maxlength;
        	}else if(obj.name == "ta_EtcReq_Poin"){
        		strText= this.ta_EtcReq_Poin.text;
        		maxlth= this.ta_EtcReq_Poin.maxlength;
        	}else if(obj.name == "ta_Dalw_Cont"){
        		strText= this.ta_Dalw_Cont.text;
        		maxlth= this.ta_Dalw_Cont.maxlength;
        	}
        	
        	trace(strText);
        	strText = strText.replace(/(^\s*)|(\s*$)/g, "");
        	var strLength = strText.length;
        	this.edit_cnt_num.set_value(strLength);
        	this.edit_max_lthn.set_value(maxlth);
        }*/

        /*this.textarea_onsetfocus = function(obj:TextArea, e:nexacro.SetFocusEventInfo)
        {
        	if(this.ds_raisreq.getColumn(e.row, "lawRaisreqNo") != null){
        		this.ds_raisreq.setRowType(e.row, Dataset.ROWTYPE_UPDATE);
        		trace(this.ds_raisreq.getRowType(e.row));
        	}
        	
        	if(obj.name == "ta_Rep_Cont"){
        		this.IV_cnt_num.set_text("회신내용 글자 수");
        		strText= this.ta_Rep_Cont.text;
        		maxlth= this.ta_Rep_Cont.maxlength;
        	}else if(obj.name == "ta_lssu_Point"){
        		this.IV_cnt_num.set_text("쟁점사항 글자 수");
        		strText= this.ta_lssu_Point.text;
        		maxlth= this.ta_lssu_Point.maxlength;
        	}else if(obj.name == "ta_EtcReq_Poin"){
        		this.IV_cnt_num.set_text("기타요구사항 글자 수");
        		strText= this.ta_EtcReq_Poin.text;
        		maxlth= this.ta_EtcReq_Poin.maxlength;
        	}else if(obj.name == "ta_Dalw_Cont"){
        		this.IV_cnt_num.set_text("불가사유내용 글자 수");
        		strText= this.ta_Dalw_Cont.text;
        		maxlth= this.ta_Dalw_Cont.maxlength;
        	}
        	
        	trace(strText);
        	strText = strText.replace(/(^\s*)|(\s*$)/g, "");

        	var strLength = strText.length;
        	this.edit_cnt_num.set_value(strLength);
        	this.edit_max_lthn.set_value(maxlth);
        }*/

        //콤보 선택에 따라 회신 값 복구하거나 사라지게 하는 함수
        this.combo_Rep_Wtr_onitemchanged = function(obj,e)
        {
        	var datavars = ["lawRaisreqIssuPoin","lawRaisreqRepCont","lawRaisreqEtcreqPoin",
        		"lawRaisreqDalwCont","lawRaisreqRepDate","lawRaisreqWtr","lawRaisreqExptDate"];
        		
        	if(obj.value=='N'){
        		
        		this.ds_raisreq_temp.addRow();
        		
        		for(i=0; i<datavars.length; i++){
        			this.ds_raisreq_temp.setColumn(0,datavars[i], this.ds_raisreq.getColumn(0,datavars[i]));
        			trace(this.ds_raisreq_temp.getColumn(0, datavars[i]));
        			this.ds_raisreq.setColumn(0, datavars[i], null);
        			trace(this.ds_raisreq.getColumn(0, datavars[i]));
        		}
        		
        	}
        	
        	if(this.ds_raisreq_temp.getRowCount() > 0){
        		if(obj.value =='Y'){
        		//alert(obj.value);
        			for(i=0; i<datavars.length; i++){
        				this.ds_raisreq.setColumn(0, datavars[i], this.ds_raisreq_temp.getColumn(0,datavars[i]));
        			}
        			this.ds_raisreq_temp.clearData();
        		}
        	
        	}
        	
        	
        	// Y 일때가 회신 -> 소제기회신 결과 내용 중 불가사유내용 빼고 다 수정할 수 있어야 함.
        	// N 일때가 미회신 -> 소제기 회신 결과 내용 다 수정할 수 있어야함.
        	var edtLawRaisreqRepWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqRepWtr");	// 회신여부
        	var edtLawRaisreqWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqWtr");	// 소송가능여부
        	
        	//alert("edtLawRaisreqRepWtr" + edtLawRaisreqRepWtr);
        	//alert("소제기 여부" + edtLawRaisreqWtr);

        	if(edtLawRaisreqRepWtr == "Y")
        	{
        		//alert("회신입니다. YYYY");
        		this.cal_Rep_Data.set_enable(true);	// 회신일자
        		this.combo_Wtr.set_enable(true);// 소송가능여부
        		this.cal_Expt_Data.set_enable(true);// 소송제기예상일자
        		this.ta_Rep_Cont.set_enable(true);// 회신내용
        		this.ta_lssu_Point.set_enable(true);// 쟁점사항
        		this.ta_EtcReq_Poin.set_enable(true);// 기타요구사항
        		this.ta_Dalw_Cont.set_enable(true);// 불가사유내용
        	}
        	else
        	{
        		//alert("미회신입니다. NNNN");
        		
        		this.cal_Rep_Data.set_enable(false);	// 회신일자
        		this.combo_Wtr.set_enable(false);// 소송가능여부
        		this.cal_Expt_Data.set_enable(false);// 소송제기예상일자
        		this.ta_Rep_Cont.set_enable(false);// 회신내용
        		this.ta_lssu_Point.set_enable(false);// 쟁점사항
        		this.ta_EtcReq_Poin.set_enable(false);// 기타요구사항
        		this.ta_Dalw_Cont.set_enable(false);// 불가사유내용
        		
        	}
        		
        	
        	
        }

        this.btn_LawSuit_onclick = function(obj,e)
        {
        	var lawRaisreqNo = this.edt_No.text;
        	var RepWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition,"lawRaisreqRepWtr");
        	var S_RaisreqWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition,"lawRaisreqWtr");
        	var lawRaisreqRepTxt = this.edt_No.text;
        	
        	
        	if(RepWtr == "Y" && S_RaisreqWtr == "Y")
        	{
        		var conf = confirm("소송을 시작하시겠습니까?");

        		if(conf == '1')
        		{
        			var oObj = {
        			  ds : this.ds_openlaw,
        			  nRow : 0,
        			  oArg  : []
        		};
        		
        		var nRow = application.gds_Params.addRow();
        		application.gds_Params.setColumn(nRow, "PARAM_ID", "RIASREQ_REP");
        		application.gds_Params.setColumn(nRow, "PARAM_VAL", lawRaisreqRepTxt);
        		
        		Iject.Mdi.call(this, oObj);
        		
        		}
        		else
        		{
        			return false;
        		}
        	
        	}
        	else
        	{
        		
        		//this.reload();
        		alert("회신상태에서와 소송가능시에만 소송을 할 수 있습니다.");
        	}
        	
        }

        

        /*********************************************************
         닫기 버튼 
         **********************************************************/
        this.btn_close_onclick = function(obj,e){
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        
        // 소송가능여부 가능/불가능 여부 체크
        this.combo_Wtr_onitemchanged = function(obj,e)
        {
        	var edtLawRaisreqWtr = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqWtr");	// 소송가능여부
        	
        	//alert("edtLawRaisreqWtr" + edtLawRaisreqWtr);

        	if(edtLawRaisreqWtr == "N")
        	{
        		//alert("NNNN");
        		this.ta_Dalw_Cont.set_enable(true);// 불가사유내용
        	}
        	else
        	{
        		//alert("YYYY");
        		this.ta_Dalw_Cont.set_value("");
        		this.ta_Dalw_Cont.set_enable(false);// 불가사유내용
        		
        	}
        	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.RAISREQ_REP_onload, this);
            this.ImageViewer05.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer01.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer02.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer03.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer07.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer10.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer11.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer12.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer13.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer15.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.combo_Rep_Wtr.addEventHandler("onitemchanged", this.combo_Rep_Wtr_onitemchanged, this);
            this.ImageViewer16.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer17.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer18.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.combo_Wtr.addEventHandler("onitemchanged", this.combo_Wtr_onitemchanged, this);
            this.ImageViewer21.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer19.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer20.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer22.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ta_Rea.addEventHandler("oneditclick", this.ta_Rea_oneditclick, this);
            this.ta_Rep_Cont.addEventHandler("oneditclick", this.ta_Rep_Cont_oneditclick, this);
            this.ta_Rep_Cont.addEventHandler("ontextchanged", this.textarea_ontextchanged, this);
            this.ta_Rep_Cont.addEventHandler("onsetfocus", this.textarea_onsetfocus, this);
            this.ta_lssu_Point.addEventHandler("oneditclick", this.ta_lssu_Point_oneditclick, this);
            this.ta_lssu_Point.addEventHandler("onkeyup", this.ta_lssu_Point_onkeyup, this);
            this.ta_lssu_Point.addEventHandler("ontextchanged", this.textarea_ontextchanged, this);
            this.ta_lssu_Point.addEventHandler("onsetfocus", this.textarea_onsetfocus, this);
            this.ta_EtcReq_Poin.addEventHandler("oneditclick", this.ta_EtcReq_Poin_oneditclick, this);
            this.ta_EtcReq_Poin.addEventHandler("onkeyup", this.ta_EtcReq_Poin_onkeyup, this);
            this.ta_EtcReq_Poin.addEventHandler("ontextchanged", this.textarea_ontextchanged, this);
            this.ta_EtcReq_Poin.addEventHandler("onsetfocus", this.textarea_onsetfocus, this);
            this.ta_Dalw_Cont.addEventHandler("ontextchanged", this.textarea_ontextchanged, this);
            this.ta_Dalw_Cont.addEventHandler("onsetfocus", this.textarea_onsetfocus, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clean.addEventHandler("onclick", this.btn_clean_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_LawSuit.addEventHandler("onclick", this.btn_LawSuit_onclick, this);

        };

        this.loadIncludeScript("RAISREQ_REP.xfdl");

       
    };
}
)();
