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
                this.set_name("insa");
                this.set_classname("insa");
                this.set_titletext("  인사관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insaAcptList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"INT\" size=\"256\"/><Column id=\"insaSabun\" type=\"string\" size=\"32\"/><Column id=\"insaId\" type=\"string\" size=\"32\"/><Column id=\"insaName\" type=\"string\" size=\"32\"/><Column id=\"insaPhone\" type=\"string\" size=\"32\"/><Column id=\"insaHp\" type=\"string\" size=\"32\"/><Column id=\"insaSex\" type=\"string\" size=\"32\"/><Column id=\"insaJoinGbnCode\" type=\"string\" size=\"32\"/><Column id=\"insaBirth\" type=\"string\" size=\"32\"/><Column id=\"insaEmail\" type=\"string\" size=\"32\"/><Column id=\"insaZip\" type=\"string\" size=\"32\"/><Column id=\"insaAddr1\" type=\"string\" size=\"32\"/><Column id=\"insaAddr2\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqDate\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqStat\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqSabun\" type=\"string\" size=\"32\"/><Column id=\"insaSignReqName\" type=\"string\" size=\"32\"/><Column id=\"insaSignDate\" type=\"string\" size=\"32\"/><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaJoinDay\" type=\"STRING\" size=\"256\"/><Column id=\"insaEngName\" type=\"STRING\" size=\"256\"/><Column id=\"insaRetireDay\" type=\"STRING\" size=\"256\"/><Column id=\"insaPutWtr\" type=\"STRING\" size=\"256\"/><Column id=\"insaClassGbnCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaCarrier\" type=\"STRING\" size=\"256\"/><Column id=\"insaPosgbnCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaCmpRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"insaYears\" type=\"STRING\" size=\"256\"/><Column id=\"insaMilWtr\" type=\"STRING\" size=\"256\"/><Column id=\"insaHomePhone\" type=\"STRING\" size=\"256\"/><Column id=\"insaSalary\" type=\"STRING\" size=\"256\"/><Column id=\"insaKosaRegWtr\" type=\"STRING\" size=\"256\"/><Column id=\"insaKosaClass\" type=\"STRING\" size=\"256\"/><Column id=\"insaPsw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_insaDeptCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaMilWtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaPosgbnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaClassGbnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">001</Col><Col id=\"codenm\">사원</Col></Row><Row><Col id=\"codeno\">002</Col><Col id=\"codenm\">주임</Col></Row><Row><Col id=\"codeno\">003</Col><Col id=\"codenm\">대리 </Col></Row><Row><Col id=\"codeno\">004</Col><Col id=\"codenm\">과장 </Col></Row><Row><Col id=\"codeno\">005</Col><Col id=\"codenm\">차장 </Col></Row><Row><Col id=\"codeno\">006</Col><Col id=\"codenm\">상무 </Col></Row><Row><Col id=\"codeno\">007</Col><Col id=\"codenm\">사장 </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaPutWtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaKosaRegWtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insaJoinGbnCode", this);
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


            
            // UI Components Initialize
            obj = new ImageViewer("img00", "absolute", "14", "65", "996", "284", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "-54", "168", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("  인사관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_plaintiff", "absolute", "20", "71", "984", "272", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_insaAcptList");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"131\"/><Column size=\"130\"/><Column size=\"131\"/><Column size=\"130\"/><Column size=\"131\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 9 dotum;\" text=\"사번\"/><Cell col=\"1\" style=\"font:bold 9 dotum;\" text=\"이름\"/><Cell col=\"2\" style=\"font:bold 9 dotum;\" text=\"직위\"/><Cell col=\"3\" style=\"font:bold 9 dotum;\" text=\"성별\"/><Cell col=\"4\" style=\"font:bold 9 dotum;\" text=\"연령\"/><Cell col=\"5\" style=\"font:bold 9 dotum;\" text=\"등급\"/><Cell col=\"6\" style=\"font:bold 9 dotum;\" text=\"부서\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:insaSabun\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:insaName\" editlimit=\"30\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:insaPosgbnCode\" combodataset=\"ds_insaPosgbnCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:insaSex\" combodataset=\"ds_insaSex\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:insaYears\" editlimit=\"11\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:insaClassGbnCode\" editlimit=\"11\" combodataset=\"ds_insaClassGbnCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:insaDeptCode\" editlimit=\"11\" combodataset=\"ds_insaDeptCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img01", "absolute", "14", "418", "996", "252", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "20", "423", "985", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "423", "105", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("입사일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "267", "423", "105", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("퇴사일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "512", "423", "105", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("사번");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32", "absolute", "756", "423", "105", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("성별");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "20", "446", "985", "25", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "20", "446", "105", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("이름");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "267", "446", "105", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("영문성명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "512", "446", "105", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("주민번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "756", "446", "105", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("연령");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "470", "985", "25", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "20", "470", "105", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("이메일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "512", "470", "105", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("부서코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10", "absolute", "756", "470", "105", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("연봉");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "20", "494", "985", "25", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "20", "494", "105", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("전화번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "267", "494", "105", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("집전화번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "512", "494", "105", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("핸드폰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14", "absolute", "756", "494", "105", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("군필여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "20", "518", "985", "25", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "20", "518", "105", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("사업자등록번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "267", "518", "105", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("직위구분코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_21", "absolute", "512", "518", "105", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("등급구분코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_22", "absolute", "756", "518", "105", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("투입여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_23", "absolute", "20", "542", "985", "25", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_24", "absolute", "20", "542", "105", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("우편번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_25", "absolute", "267", "542", "105", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("주소1");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_26", "absolute", "20", "566", "985", "25", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27", "absolute", "20", "566", "105", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("주소2");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_28", "absolute", "267", "566", "105", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("KOSA등록여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34", "absolute", "20", "590", "737", "75", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_29", "absolute", "512", "566", "105", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("KOSA등급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_30", "absolute", "756", "566", "105", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("입사구분코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_31", "absolute", "756", "590", "249", "25", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "20", "590", "105", "75", null, null, this);
            obj.set_taborder("37");
            obj.set_text("경력");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_35", "absolute", "756", "614", "249", "25", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_36", "absolute", "756", "590", "105", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("아이디");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_37", "absolute", "756", "614", "105", "25", null, null, this);
            obj.set_taborder("88");
            obj.set_text("패스워드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_insaJoinDay", "absolute", "130", "426", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");

            obj = new Calendar("cal_insaRetireDay", "absolute", "376", "426", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");

            obj = new Edit("edit_insaSabun", "absolute", "621", "426", "130", "19", null, null, this);
            obj.set_taborder("44");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_insaSex", "absolute", "865", "426", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("@ds_insaSex");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_align("left middle");

            obj = new Edit("edit_insaName", "absolute", "130", "449", "130", "19", null, null, this);
            obj.set_taborder("46");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_insaEngName", "absolute", "376", "449", "130", "19", null, null, this);
            obj.set_taborder("47");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_insaRegBirth", "absolute", "621", "449", "130", "19", null, null, this);
            obj.set_taborder("48");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_clipmode("excludespace");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_insaYears", "absolute", "865", "449", "130", "19", null, null, this);
            obj.set_taborder("49");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_insaEmail", "absolute", "130", "473", "376", "19", null, null, this);
            obj.set_taborder("50");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_insaDeptCode", "absolute", "621", "473", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("@ds_insaDeptCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");

            obj = new Edit("edit_insaSalary", "absolute", "865", "473", "130", "19", null, null, this);
            obj.set_taborder("52");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_insaPhone", "absolute", "130", "497", "130", "19", null, null, this);
            obj.set_taborder("53");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.set_clipmode("excludespace");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_insaHomePhone", "absolute", "376", "497", "130", "19", null, null, this);
            obj.set_taborder("54");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.set_clipmode("excludespace");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_insaHp", "absolute", "621", "497", "130", "19", null, null, this);
            obj.set_taborder("55");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.set_clipmode("excludespace");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_insaMilWtr", "absolute", "865", "497", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_innerdataset("@ds_insaMilWtr");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_align("left middle");

            obj = new Edit("edit_insaCmpRegNo", "absolute", "130", "521", "130", "19", null, null, this);
            obj.set_taborder("57");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_insaPosgbnCode", "absolute", "376", "521", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_innerdataset("@ds_insaPosgbnCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Combo("combo_insaClassGbnCode", "absolute", "621", "521", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_innerdataset("@ds_insaClassGbnCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Combo("combo_insaPutWtr", "absolute", "865", "521", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("@ds_insaPutWtr");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Edit("edit_insaZip", "absolute", "130", "545", "75", "19", null, null, this);
            obj.set_taborder("61");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#46463dff");
            this.addChild(obj.name, obj);

            obj = new Plugin("plugin_insaZip", "absolute", "20.41%", "545", "51", "19", null, null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj.setProperty("popupstyle", "true");
            obj.setProperty("windowed", "true");
            obj.setProperty("taborder", "70");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute", "absolute", "206", "543", "55", "23", null, null, this);
            obj.set_taborder("62");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_insaAddr1", "absolute", "376", "545", "619", "19", null, null, this);
            obj.set_taborder("63");
            obj.set_enable("false");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_insaAddr2", "absolute", "130", "569", "130", "19", null, null, this);
            obj.set_taborder("64");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#46463dff");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_insaKosaRegWtr", "absolute", "376", "569", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_innerdataset("@ds_insaKosaRegWtr");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_align("left middle");

            obj = new Edit("edit_insaKosaClass", "absolute", "621", "569", "130", "19", null, null, this);
            obj.set_taborder("66");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_insaJoinGbnCode", "absolute", "865", "569", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_innerdataset("@ds_insaJoinGbnCode");
            obj.style.set_align("left middle");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Edit("edit_insaId", "absolute", "865", "594", "130", "19", null, null, this);
            obj.set_taborder("69");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_insaPsw", "absolute", "865", "618", "130", "19", null, null, this);
            obj.set_taborder("87");
            obj.set_maxlength("30");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Prev", "absolute", "314", "360", "29", "27", null, null, this);
            obj.set_taborder("74");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No0", "absolute", "354", "360", "29", "27", null, null, this);
            obj.set_taborder("75");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No1", "absolute", "386", "360", "29", "27", null, null, this);
            obj.set_taborder("76");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No2", "absolute", "418", "360", "29", "27", null, null, this);
            obj.set_taborder("77");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No3", "absolute", "450", "360", "29", "27", null, null, this);
            obj.set_taborder("78");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No4", "absolute", "482", "360", "29", "27", null, null, this);
            obj.set_taborder("79");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No5", "absolute", "514", "360", "29", "27", null, null, this);
            obj.set_taborder("80");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No6", "absolute", "546", "360", "29", "27", null, null, this);
            obj.set_taborder("81");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No7", "absolute", "578", "360", "29", "27", null, null, this);
            obj.set_taborder("82");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No8", "absolute", "610", "360", "29", "27", null, null, this);
            obj.set_taborder("83");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_No9", "absolute", "642", "360", "29", "27", null, null, this);
            obj.set_taborder("84");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Next", "absolute", "684", "360", "29", "27", null, null, this);
            obj.set_taborder("85");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "833", "372", "55", "23", null, null, this);
            obj.set_taborder("71");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aprv", "absolute", "893", "372", "55", "23", null, null, this);
            obj.set_taborder("72");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "953", "372", "55", "23", null, null, this);
            obj.set_taborder("73");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("89");
            obj.set_text("  인사 관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("edit_insaCarrier", "absolute", "130", "593", "619", "69", null, null, this);
            obj.set_taborder("92");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("insa");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("  인사관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","combo_insaSex","value","ds_insaAcptList","insaSex");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","mask_insaRegBirth","value","ds_insaAcptList","insaBirth");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","combo_insaDeptCode","value","ds_insaAcptList","insaDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","mask_insaPhone","value","ds_insaAcptList","insaPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","mask_insaHomePhone","value","ds_insaAcptList","insaHomePhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mask_insaHp","value","ds_insaAcptList","insaHp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","combo_insaMilWtr","value","ds_insaAcptList","insaMilWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","combo_insaPosgbnCode","value","ds_insaAcptList","insaPosgbnCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","combo_insaClassGbnCode","value","ds_insaAcptList","insaClassGbnCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","combo_insaPutWtr","value","ds_insaAcptList","insaPutWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edit_insaZip","value","ds_insaAcptList","insaZip");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","combo_insaKosaRegWtr","value","ds_insaAcptList","insaKosaRegWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","combo_insaJoinGbnCode","value","ds_insaAcptList","insaJoinGbnCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edit_insaYears","value","ds_insaAcptList","insaYears");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edit_insaEngName","value","ds_insaAcptList","insaEngName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edit_insaName","value","ds_insaAcptList","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edit_insaSabun","value","ds_insaAcptList","insaSabun");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edit_insaSalary","value","ds_insaAcptList","insaSalary");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edit_insaId","value","ds_insaAcptList","insaId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edit_insaKosaClass","value","ds_insaAcptList","insaKosaClass");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edit_insaCmpRegNo","value","ds_insaAcptList","insaCmpRegNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edit_insaEmail","value","ds_insaAcptList","insaEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","cal_insaJoinDay","value","ds_insaAcptList","insaJoinDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","cal_insaRetireDay","value","ds_insaAcptList","insaRetireDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edit_insaAddr1","value","ds_insaAcptList","insaAddr1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edit_insaAddr2","value","ds_insaAcptList","insaAddr2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edit_insaPsw","value","ds_insaAcptList","insaPsw");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edit_insaCarrier","value","ds_insaAcptList","insaCarrier");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("insa.xfdl", "Lib::common.xjs");
        this.registerScript("insa.xfdl", function() {
        //include "Lib::common.xjs";

        

        // form 온로드 시 이벤트
        this.insa_onload = function(obj,e)
        { 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        	var rowIdx = this.ds_search.addRow();	
        	this.gf_codeComListLoad("ds_insaDeptCode", "ds_insaDeptCode", "Y", "", "", "transaction_callback", "S01"); // 부서
        	this.gf_codeComListLoad("ds_insaPosgbnCode", "ds_insaPosgbnCode", "Y", "", "", "transaction_callback", "E01"); // 직위
        	this.gf_codeComListLoad("ds_insaClassGbnCode", "ds_insaClassGbnCode", "Y", "", "", "transaction_callback", "E01"); // 등급
        	this.gf_codeComListLoad("ds_insaJoinGbnCode", "ds_insaJoinGbnCode", "Y", "", "", "transaction_callback", "B03"); // 입사구분

        
        	this.gfn_transaction(this,
        						"selectInsaAcptList",
        						"com/insaAcpt/selectInsaAcptList.do",
        						"ds_search=ds_search",
        						"ds_insaAcptList=ds_output",
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
        		
        // 		case "saveInsaAcptList":
        // 			strSwitch = "수정";
        // 			this.alert("수정완료");
        // 			btn_save_onclick();
        // 			
        // 			break;
        // 		case "saveCode":
        // 			if(this.confirmStr == "저장"){
        // 				this.Combo00_onitemchanged();
        // 				console.log(this.Combo00_onitemchanged());
        // 				this.alert("저장완료");
        // 			}else if(this.confirmStr == "수정"){
        // 				strSwitch = "수정";
        // 				this.Combo00_onitemchanged();
        // 				this.alert("수정완료");
        // 			}
        // 			
        // 			break;

        		case "saveInsaList":
        			this.alert("저장되었습니다.");
        			btn_save_onclick();
        			
        			break;
        			
        		case "delInsaList":
        			this.alert("삭제되었습니다.");
        			btn_del_onclick();
        			
        			break;

        	
        	}
        	
        }

        

        

        

        // 신규버튼
        this.btn_aprv_onclick = function(obj,e)
        {	
        	this.ds_insaAcptList.addRow(); // 새로운 행 생성
        	
        	alert("정보를 입력하세요");
        	
        	var id = application.gds_User.getColumn(application.gds_User.rowposition, "id");

        	if(id == null) {
        		id = "ID";
        	}
        	this.ds_insaAcptList.setColumn(this.ds_insaAcptList.rowposition, "registId", id);
        	

        }

        

        
        // 삭제 버튼
        this.btn_del_onclick = function(obj,e)
        {
        	var registerId = application.gds_User.getColumn(application.gds_User.rowposition, "sabun"); 
        	
        	var strParam = "registerId=" + registerId;

        	var confirmStr = this.confirm("삭제하시겠습니까?");
        	
        	if(confirmStr){
        		this.ds_insaAcptList.deleteRow(this.ds_insaAcptList.rowposition);
        		this.gfn_transaction(this,
        						"delInsaList",
        						"com/insaAcpt/saveInsaList.do",
        						"ds_input=ds_insaAcptList:U",
        						"ds_insaAcptList=ds_output",
        						strParam,
        						"transaction_callback"
        						);
        	}
        }

        
        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        // 	// 입력란 검사
        // 	if(this.cal_insaJoinDay.value == null)
        // 	{	
        // 		alert ("입사일자를 선택해주세요.");
        // 		this.cal_insaJoinDay.setFocus();
        // 	}
        // 	else if(this.combo_insaSex.value == null || this.combo_insaSex.value == "")
        // 	{
        // 		alert ("성별을 선택해주세요.");
        // 		this.combo_insaSex.setFocus();
        // 	}
        // 	else if(this.edit_insaName.value == null)
        // 	{
        // 		alert ("이름을 선택해주세요.");
        // 		this.edit_insaName.setFocus();
        // 	}
        // 	else if(this.edit_insaEngName.value == null)
        // 	{
        // 		alert ("영문성명을 선택해주세요.");
        // 		this.edit_insaEngName.setFocus();
        // 	}
        	
        	
        	
        	var registerId = application.gds_User.getColumn(application.gds_User.rowposition, "sabun"); 
        	
        	var strParam = "registerId=" + registerId;
        	
        	rowNum = this.ds_insaAcptList.rowposition;
        	
        	this.gfn_transaction(this,
        						"saveInsaList",
        						"com/insaAcpt/saveInsaList.do",
        						"ds_input=ds_insaAcptList:U",
        						"ds_insaAcptList=ds_output",
        						strParam,
        						"transaction_callback"
        						);

        }

        

        

        

        
        // 우편 번호 검색하기
        this.btn_execute_onclick = function(obj,e)
        {
        	this.plugin_insaZip.callMethod("Navigate2", "http://localhost:8080/pd_law_nexa/jsp/zipcodeSearch.jsp"); // JKIM_2020.02.17 : move to jsp directory
        }

        
        // 우편 번호 검색 후 값 받기
        this.plugin_insaZip_TitleChange = function()
        {
        	
        	if(arguments[0] != "TITLE"){
        		var postArr = arguments[0].split("_");
        		trace(postArr);
        		this.edit_insaZip.set_value(postArr[0]);
        		this.edit_insaAddr1.set_value(postArr[1]);
        		this.edit_insaAddr2.set_enable(true);
        	}
        	
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
            this.addEventHandler("onload", this.insa_onload, this);
            this.sta_15.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_17.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_32.addEventHandler("onclick", this.sta_32_onclick, this);
            this.sta_02.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_03.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_05.addEventHandler("onclick", this.sta_32_onclick, this);
            this.sta_07.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_10.addEventHandler("onclick", this.sta_32_onclick, this);
            this.sta_11.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_12.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_14.addEventHandler("onclick", this.sta_32_onclick, this);
            this.sta_18.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_20.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_22.addEventHandler("onclick", this.sta_32_onclick, this);
            this.sta_24.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_25.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_27.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_28.addEventHandler("onclick", this.sta_17_onclick, this);
            this.sta_30.addEventHandler("onclick", this.sta_32_onclick, this);
            this.sta_33.addEventHandler("onclick", this.sta_15_onclick, this);
            this.sta_36.addEventHandler("onclick", this.sta_36_onclick, this);
            this.sta_37.addEventHandler("onclick", this.sta_37_onclick, this);
            this.mask_insaRegBirth.addEventHandler("onsetfocus", this.MaskEdit01_onsetfocus, this);
            this.mask_insaRegBirth.addEventHandler("onkillfocus", this.MaskEdit01_onkillfocus, this);
            this.combo_insaDeptCode.addEventHandler("onitemchanged", this.combo_insaDeptCode_onitemchanged, this);
            this.mask_insaPhone.addEventHandler("onsetfocus", this.mask_insaPhone_onsetfocus, this);
            this.mask_insaPhone.addEventHandler("onkillfocus", this.mask_insaPhone_onkillfocus, this);
            this.mask_insaHomePhone.addEventHandler("onsetfocus", this.mask_insaHomePhone_onsetfocus, this);
            this.mask_insaHomePhone.addEventHandler("onkillfocus", this.mask_insaHomePhone_onkillfocus, this);
            this.mask_insaHp.addEventHandler("onsetfocus", this.mask_insaHp_onsetfocus, this);
            this.mask_insaHp.addEventHandler("onkillfocus", this.mask_insaHp_onkillfocus, this);
            this.combo_insaPosgbnCode.addEventHandler("onitemchanged", this.combo_insaPosgbnCode_onitemchanged, this);
            this.plugin_insaZip.addEventHandler("TitleChange", this.plugin_insaZip_TitleChange, this);
            this.btn_execute.addEventHandler("onclick", this.btn_execute_onclick, this);
            this.edit_insaAddr1.addEventHandler("ontextchange", this.edit_insaAddr1_ontextchange, this);
            this.edit_insaAddr1.addEventHandler("ontextchanged", this.edit_insaAddr1_ontextchanged, this);
            this.edit_insaAddr2.addEventHandler("ontextchange", this.edit_insaAddr1_ontextchange, this);
            this.edit_insaAddr2.addEventHandler("ontextchanged", this.edit_insaAddr1_ontextchanged, this);
            this.stc_Prev.addEventHandler("onclick", this.div_page_stc_Prev_onclick, this);
            this.stc_No0.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No1.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No2.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No3.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No4.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No5.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No6.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No7.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No8.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_No9.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.stc_Next.addEventHandler("onclick", this.div_page_stc_Next_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_aprv.addEventHandler("onclick", this.btn_aprv_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("insa.xfdl");

       
    };
}
)();
