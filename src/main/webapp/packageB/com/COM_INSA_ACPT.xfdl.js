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
                this.set_name("COM_INSA_ACPT");
                this.set_classname("COM_INSA_ACPT");
                this.set_titletext("사원승인내역관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insaAcptGb", this);
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

            obj = new Dataset("ds_insaAcptList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"INT\" size=\"256\"/><Column id=\"insaSabun\" type=\"string\" size=\"32\"/><Column id=\"insaId\" type=\"string\" size=\"32\"/><Column id=\"insaName\" type=\"string\" size=\"32\"/><Column id=\"insaPhone\" type=\"string\" size=\"32\"/><Column id=\"insaHp\" type=\"string\" size=\"32\"/><Column id=\"insaSex\" type=\"string\" size=\"32\"/><Column id=\"insaJoinGbnCode\" type=\"string\" size=\"32\"/><Column id=\"insaBirth\" type=\"string\" size=\"32\"/><Column id=\"insaEmail\" type=\"string\" size=\"32\"/><Column id=\"insaZip\" type=\"string\" size=\"32\"/><Column id=\"insaAddr1\" type=\"string\" size=\"32\"/><Column id=\"insaAddr2\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqDate\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqStat\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqSabun\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqName\" type=\"string\" size=\"32\"/><Column id=\"insaSignDate\" type=\"string\" size=\"32\"/><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaJoinDay\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaSex", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">m</Col><Col id=\"data\">남성</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"data\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaJoinGbn", this);
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
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_00", "absolute", "14", "141", "996", "275", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img02", "absolute", "14", "476", "996", "110", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_text("사원 승인 내역 관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_text("승인상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_insaAcptGb", "absolute", "130", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_insaAcptGb");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Static("sta_no00", "absolute", "278", "70", "105", "25", null, null, this);
            obj.set_text("신청일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "17", "123", "100", "13", null, null, this);
            obj.set_text("사원 승인 내역");
            obj.style.set_color("#46463dff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "884", "71", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_insaAcpt", "absolute", "20", "147", "984", "263", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_insaAcptList");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 9 dotum;\" text=\"No\"/><Cell col=\"1\" style=\"font:bold 9 dotum;\" text=\"ID\"/><Cell col=\"2\" style=\"font:bold 9 dotum;\" text=\"성명\"/><Cell col=\"3\" style=\"font:bold 9 dotum;\" text=\"성별\"/><Cell col=\"4\" style=\"font:bold 9 dotum;\" text=\"생년월일\"/><Cell col=\"5\" style=\"font:bold 9 dotum;\" text=\"전화번호\"/><Cell col=\"6\" style=\"font:bold 9 dotum;\" text=\"휴대전화번호\"/><Cell col=\"7\" style=\"font:bold 9 dotum;\" text=\"부서\"/><Cell col=\"8\" style=\"font:bold 9 dotum;\" text=\"입사구분\"/><Cell col=\"9\" style=\"font:bold 9 dotum;\" text=\"신청일시\"/><Cell col=\"10\" style=\"font:bold 9 dotum;\" text=\"승인상태\"/><Cell col=\"11\" displaytype=\"checkbox\" text=\"0\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\"/><Cell col=\"1\" text=\"bind:insaId\"/><Cell col=\"2\" text=\"bind:insaName\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:insaSex\" combodataset=\"ds_insaSex\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:insaBirth\" mask=\"######\"/><Cell col=\"5\" text=\"bind:insaPhone\" mask=\"expr:insaPhone.length == &quot;9&quot;? &quot;##-###-####&quot; : insaPhone.length == &quot;11&quot;? &quot;###-####-####&quot; : (insaPhone.substr(0,2) == &quot;02&quot; &amp;&amp; insaPhone.length == &quot;10&quot;)? &quot;##-####-####&quot; : &quot;###-###-####&quot;\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:insaHp\" mask=\"expr:insaHp.length == &quot;11&quot;? &quot;###-####-####&quot; : &quot;###-###-####&quot;\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:insaDeptCode\" combodataset=\"ds_dept\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:insaJoinGbnCode\" combodataset=\"ds_insaJoinGbn\" combocodecol=\"codeno\" combodatacol=\"codeFull\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:insaJoinDay\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:insaSignReqStat\" combodataset=\"ds_insaAcptGb\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "17", "454", "197", "18", null, null, this);
            obj.set_text("사원 승인 상세정보");
            obj.style.set_color("#46463dff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14", "absolute", "60", "483", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "60", "507", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "483", "105", "25", null, null, this);
            obj.set_text("ID");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edit00", "absolute", "130", "486", "130", "19", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "267", "483", "105", "25", null, null, this);
            obj.set_text("성명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "377", "486", "130", "19", null, null, this);
            obj.set_taborder("10");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "512", "483", "105", "25", null, null, this);
            obj.set_text("생년월일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "622", "486", "130", "19", null, null, this);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_mask("######");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "756", "483", "105", "25", null, null, this);
            obj.set_text("성별");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "866", "485", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_insaSex");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Static("sta_03", "absolute", "20", "507", "105", "25", null, null, this);
            obj.set_text("전화번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "267", "507", "105", "25", null, null, this);
            obj.set_text("휴대번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "756", "507", "105", "25", null, null, this);
            obj.set_text("입사구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "866", "509", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_insaJoinGbn");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left middle");

            obj = new Static("sta_07", "absolute", "60", "531", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "20", "531", "105", "25", null, null, this);
            obj.set_text("신청일시");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edit04", "absolute", "130", "534", "130", "19", null, null, this);
            obj.set_taborder("16");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "512", "531", "105", "25", null, null, this);
            obj.set_text("승인상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10", "absolute", "60", "555", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "622", "533", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@ds_insaAcptGb");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left middle");

            obj = new Button("btn_save", "absolute", "947", "420", "55", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "20", "555", "105", "25", null, null, this);
            obj.set_text("승인자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edit05", "absolute", "130", "558", "130", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "267", "555", "105", "25", null, null, this);
            obj.set_text("승인일시");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edit06", "absolute", "377", "558", "130", "19", null, null, this);
            obj.set_taborder("20");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "512", "507", "105", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03", "absolute", "622", "509", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left middle");

            obj = new Calendar("cal_insaAcptReqDate", "absolute", "387", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_value("null");

            obj = new Div("div_page", "absolute", "179", "420", "573", "18", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "106", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "476", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "146", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "178", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("28");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "210", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "242", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "274", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "306", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("32");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "338", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "370", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "402", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "434", "-1", "29", "27", null, null, this.div_page);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "130", "510", "130", "19", null, null, this);
            obj.set_taborder("25");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.set_clipmode("excludespace");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "377", "510", "130", "19", null, null, this);
            obj.set_taborder("26");
            obj.set_type("string");
            obj.style.set_align("left middle");
            obj.set_mask("###-####-####");
            obj.set_clipmode("excludespace");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("30");
            obj.set_text("  사원승인 내역관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("COM_INSA_ACPT");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("사원승인내역관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","grd_insaAcpt","binddataset","ds_mastcodelist","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edit00","value","ds_insaAcptList","insaId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit01","value","ds_insaAcptList","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","MaskEdit00","value","ds_insaAcptList","insaBirth");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Combo00","value","ds_insaAcptList","insaSex");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Combo01","value","ds_insaAcptList","insaJoinGbnCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edit04","value","ds_insaAcptList","insaJoinDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Combo02","value","ds_insaAcptList","insaSignReqStat");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edit05","value","ds_insaAcptList","insaSignReqName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edit06","value","ds_insaAcptList","insaSignDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Combo03","value","ds_insaAcptList","insaDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","MaskEdit01","value","ds_insaAcptList","insaPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","MaskEdit02","value","ds_insaAcptList","insaHp");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("COM_INSA_ACPT.xfdl", "Lib::common.xjs");
        this.registerScript("COM_INSA_ACPT.xfdl", function() {

        //include "Lib::common.xjs";

        var rowNum = "";
        var pageNum = "";
        var strSwitch = "";

        // form 온로드 시 이벤트
        this.COM_INSA_ACPT_onload = function(obj,e)
        {
        	trace("TEST");
        	this.gf_codeComListLoad("ds_insaAcptGb",  "ds_insaAcptGb",  "Y", "", "", "transaction_callback", "X02"); //승인상태구분 공통코드조회

        
        	// 로그인한 ID 값을 승인자에 넣기
        	var name = application.gds_User.getColumn(0, "name");
        	//alert(name);
        	this.ds_insaAcptList.setColumn(0, "insaSignReqName", name);

        
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
        		case "ds_insaAcptGb": 
        			this.gf_codeComListLoad("ds_insaJoinGbn",  "ds_insaJoinGbn",  "Y", "", "전체", "transaction_callback", "B03"); //입사구분
        			break;
        		
        		case "ds_insaJoinGbn":
        			this.gf_codeComListLoad("dsComCode", "ds_dept", "N", "", "", "transaction_callback", "S01"); // 공통코드(부서)조회
        			break;
        		
        		case "dsComCode":
        			this.btn_search_onclick();
        			break;
        		
        		case "selectInsaAcptList":
        			var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        			this.ds_insaAcptList.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				
        				if (this.ds_insaAcptList.getRowCount() == 0)
        				{
        					this.ds_insaAcptList.filter("");
        					this.div_page.set_visible("false");
        					this.alert("조회할 자료가 없습니다.");
        					return;
        				}
        				else
        				{
        					this.div_page.set_visible("true");
        					this.fv_iServerRowCount = this.ds_insaAcptList.getRowCount();
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
        			
        			this.grd_insaAcpt_oncellclick();
        			this.pageSelect(pageNum);
        			this.grd_insaAcpt.selectCell(rowNum);
        			//this.alert("조회완료");
        			break;
        		
        		case "saveInsaAcptList":
        			strSwitch = "수정";
        			this.btn_search_onclick();
        			alert("저장되었습니다.");
        			break;
        	}
        	
        }

        
        // 사원 내역 검색
        this.btn_search_onclick = function(obj,e)
        {
        	
        	//소송관리번호조회 버튼 클릭시 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	var searchCondition = this.cbo_insaAcptGb.value;
        	var searchKeyword = this.cal_insaAcptReqDate.value;
        	
        	this.ds_search.setColumn(0, "searchCondition", searchCondition);
        	this.ds_search.setColumn(0, "searchKeyword", searchKeyword);
        	
        	this.gfn_transaction(this,
        						"selectInsaAcptList",
        						"com/insaAcpt/selectInsaAcptList.do",
        						"ds_search=ds_search",
        						"ds_insaAcptList=ds_output",
        						"",
        						"transaction_callback"
        						);
        	
        }

        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.cal_insaAcptReqDate.value = "";		//신청일자 초기화 
        	this.cbo_insaAcptGb.index = 0;			//승인상태 초기화
        	this.div_page.set_visible("false");
        	this.ds_insaAcptList.clearData();		//리스트 초기화
        	
        	this.reload();
        }

        // 승인 상태 저장
        this.btn_save_onclick = function(obj,e)
        {
        	var registerId = application.gds_User.getColumn(application.gds_User.rowposition, "sabun"); 
        	
        	var strParam = "registerId=" + registerId;
        	
        	rowNum = this.ds_insaAcptList.rowposition;
        	
        	this.gfn_transaction(this,
        						"saveInsaAcptList",
        						"com/insaAcpt/saveInsaAcptList.do",
        						"ds_input=ds_insaAcptList:U",
        						"ds_insaAcptList=ds_output",
        						strParam,
        						"transaction_callback"
        						);
        }

        

        /////////////////// 페이징 처리

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
        	this.ds_insaAcptList.filter("");
        	
        	this.ds_insaAcptList.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("select", 0, "succ");
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

        

        

        // 전화번호 마스크 에디션 focus out
        this.MaskEdit01_onkillfocus = function(obj,e)
        {
        	if(this.MaskEdit01.getLength() == "-1"){
        		return;
        	}
        	if(this.MaskEdit01.getLength() == "9"){
        		this.MaskEdit01.set_mask("##-###-####")
        	}else if(this.MaskEdit01.getLength() == "10"){
        		if((this.MaskEdit01.value).substr(0,2) == "02"){
        			this.MaskEdit01.set_mask("##-####-####")
        		}else{
        			this.MaskEdit01.set_mask("###-###-####")
        		}
        	}else if(this.MaskEdit01.getLength() == "11"){
        		this.MaskEdit01.set_mask("###-####-####")
        	}else{
        		alert("연락처가 올바르게 적혔는지 확인해주세요");
        		this.MaskEdit01.setFocus();
        	}
        }

        // 전화번호 마스크 에디션 focus on
        this.MaskEdit01_onsetfocus = function(obj,e)
        {
        	this.MaskEdit01.set_mask("###-####-####")
        }

        
        // 핸드폰 번호 마스크 에디션 focus out
        this.MaskEdit02_onkillfocus = function(obj,e)
        {
        	if(this.MaskEdit02.getLength() == "-1"){
        		return;
        	}
        	if(this.MaskEdit02.getLength() == "11"){
        		this.MaskEdit02.set_mask("###-####-####")
        	}else if(this.MaskEdit02.getLength() == "10"){
        		this.MaskEdit02.set_mask("###-###-####")
        	}else{
        		alert("연락처가 올바르게 적혔는지 확인해주세요");
        		this.MaskEdit02.setFocus();
        	}
        }

        // 핸드폰 번호 마스크 에디션 focus on
        this.MaskEdit02_onsetfocus = function(obj,e)
        {
        	this.MaskEdit02.set_mask("###-####-####")
        }

        // 전화번호 및 핸드폰 번호 자동 매핑
        this.grd_insaAcpt_oncellclick = function(obj,e)
        {
        	this.MaskEdit01_onkillfocus();
        	this.MaskEdit02_onkillfocus();
        }

        // 전화번호 및 핸드폰 번호 자동 매핑
        this.grd_insaAcpt_onselectchanged = function(obj,e)
        {
        	this.MaskEdit01_onkillfocus();
        	this.MaskEdit02_onkillfocus();
        }

        this.Combo01_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.COM_INSA_ACPT_onload, this);
            this.sta_01.addEventHandler("onclick", this.sta_01_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_insaAcpt.addEventHandler("oncellclick", this.grd_insaAcpt_oncellclick, this);
            this.grd_insaAcpt.addEventHandler("onselectchanged", this.grd_insaAcpt_onselectchanged, this);
            this.sta_15.addEventHandler("onclick", this.sta_15_onclick, this);
            this.edit00.addEventHandler("oneditclick", this.edt_caseNo00_oneditclick, this);
            this.sta_03.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_04.addEventHandler("onclick", this.sta_15_onclick, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.sta_08.addEventHandler("onclick", this.sta_15_onclick, this);
            this.edit04.addEventHandler("oneditclick", this.edt_caseNo00_oneditclick, this);
            this.sta_09.addEventHandler("onclick", this.sta_15_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.sta_11.addEventHandler("onclick", this.sta_15_onclick, this);
            this.edit05.addEventHandler("oneditclick", this.edt_caseNo00_oneditclick, this);
            this.sta_12.addEventHandler("onclick", this.sta_15_onclick, this);
            this.edit06.addEventHandler("oneditclick", this.edt_caseNo00_oneditclick, this);
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
            this.MaskEdit01.addEventHandler("onkillfocus", this.MaskEdit01_onkillfocus, this);
            this.MaskEdit01.addEventHandler("onsetfocus", this.MaskEdit01_onsetfocus, this);
            this.MaskEdit02.addEventHandler("onkillfocus", this.MaskEdit02_onkillfocus, this);
            this.MaskEdit02.addEventHandler("onsetfocus", this.MaskEdit02_onsetfocus, this);

        };

        this.loadIncludeScript("COM_INSA_ACPT.xfdl");

       
    };
}
)();
