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
                this.set_name("OUT_legal_ad_up");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate1\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate2\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo_sep", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOpenWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvFactRela\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvQuesIssu\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtc\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReviDay\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtcRepPoin\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqRepdate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqFact\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqQues\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqReq\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgrName\" type=\"STRING\" size=\"256\"/><Column id=\"repMgrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo_wtr", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codenm\">전체</Col></Row><Row><Col id=\"codenm\">회신</Col><Col id=\"codeno\">Y</Col></Row><Row><Col id=\"codenm\">미회신</Col><Col id=\"codeno\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view01", "absolute", "14", "144", "996", "236", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "415", "1002", "211", null, null, this);
            obj.set_taborder("42");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_011", "absolute", "84", "468", "924", "52", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_021", "absolute", "84", "519", "924", "51", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_031", "absolute", "84", "569", "924", "51", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_012", "absolute", "84", "444", "924", "25", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "998", "60", null, null, this);
            obj.set_taborder("40");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "56", "94", "950", "25", null, null, this);
            obj.set_taborder("39");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  외부법률자문조회");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "22", "70", "984", "25", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "21", "70", "115", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "21", "94", "115", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "331", "70", "115", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "331", "94", "115", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_00", "absolute", "141", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_combo_sep");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Edit("edt_00", "absolute", "141", "73", "140", "19", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Grid("out_legal_ad_grd_", "absolute", "21", "151", "982", "222", null, null, this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_legal_ad");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"102\"/><Column size=\"283\"/><Column size=\"76\"/><Column size=\"99\"/><Column size=\"88\"/><Column size=\"98\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"의뢰번호\"/><Cell col=\"1\" text=\"자문구분\"/><Cell col=\"2\" text=\"의뢰제목\"/><Cell col=\"3\" text=\"회신여부\"/><Cell col=\"4\" text=\"의뢰일자\"/><Cell col=\"5\" text=\"의뢰담당자\"/><Cell col=\"6\" text=\"회신일자\"/><Cell col=\"7\" text=\"회신\"/></Band><Band id=\"body\"><Cell text=\"bind:legaladvLawAdvReqNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:legaladvLawAdvCode\" combodataset=\"ds_combo_sep\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:legaladvOutReqTit\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:legaladvRepWtr\" combodataset=\"ds_combo_wtr\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"4\" displaytype=\"expr:comp.parent.gfn_IsNull(legaladvOutReqDate) ?' normal' : 'date'\" text=\"bind:legaladvOutReqDate\"/><Cell col=\"5\" text=\"bind:repMgrName\"/><Cell col=\"6\" displaytype=\"expr:comp.parent.gfn_IsNull(legaladvRepDate) ?' normal' : 'date'\" text=\"bind:legaladvRepDate\"/><Cell col=\"7\" celltype=\"none\" displaytype=\"button\" edittype=\"button\" style=\"background:transparent;color:black;color2:black;controlcolor:black;\" text=\"회신\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_051", "absolute", "84", "420", "924", "25", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle__06", "absolute", "1.37%", "395", null, "15", "79.69%", null, this);
            obj.set_taborder("10");
            obj.set_text("  법률자문 의뢰사항");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01", "absolute", "876", "95", "55", "23", null, null, this);
            obj.set_taborder("12");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02", "absolute", "936", "95", "55", "23", null, null, this);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "585", "74", "30", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "20", "420", "105", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10", "absolute", "264", "420", "105", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("의뢰담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "512", "420", "105", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "761", "420", "105", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("회신요청일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_14", "absolute", "20", "519", "105", "51", null, null, this);
            obj.set_taborder("24");
            obj.set_text("질의사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_15", "absolute", "20", "569", "105", "51", null, null, this);
            obj.set_taborder("25");
            obj.set_text("요청사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_02", "absolute", "130", "423", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("@ds_combo_sep");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_01", "absolute", "374", "423", "130", "19", null, null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_02", "absolute", "622", "423", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("cal_03", "absolute", "871", "423", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_02_nosize", "absolute", "130", "447", "873", "19", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "130", "472", "873", "46", null, null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.style.setStyleValue("padding", "disabled", "0 3 0 3");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "130", "522", "873", "46", null, null, this);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.style.setStyleValue("padding", "disabled", "0 3 0 3");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "130", "572", "873", "46", null, null, this);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.style.setStyleValue("padding", "disabled", "0 3 0 3");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00", "absolute", "947", "650", "55", "23", null, null, this);
            obj.set_taborder("34");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "457", "98", "167", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("@ds_combo_wtr");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_direction("vertical");

            obj = new Calendar("cal_00", "absolute", "451", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");

            obj = new Calendar("cal_01", "absolute", "607", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_enable("false");

            obj = new Static("sta_09", "absolute", "20", "444", "105", "27", null, null, this);
            obj.set_taborder("19");
            obj.set_text("의뢰제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_13", "absolute", "20", "468", "105", "52", null, null, this);
            obj.set_taborder("23");
            obj.set_text("사실관계");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OUT_legal_ad_up_skw");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_01","value","ds_legal_ad","repMgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cb_02","value","ds_legal_ad","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_02","value","ds_legal_ad","legaladvOutReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cal_03","value","ds_legal_ad","legaladvOutReqRepdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_02_nosize","value","ds_legal_ad","legaladvOutReqTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","TextArea00","value","ds_legal_ad","legaladvOutReqFact");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","TextArea01","value","ds_legal_ad","legaladvOutReqQues");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","TextArea02","value","ds_legal_ad","legaladvOutReqReq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_00","value","ds_search","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cb_00","value","ds_search","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cal_00","value","ds_search","legaladvReqDate1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_01","value","ds_search","legaladvReqDate2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Radio00","value","ds_search","legaladvRepWtr");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OUT_legal_ad_up.xfdl", "Lib::common.xjs");
        this.registerScript("OUT_legal_ad_up.xfdl", function() {
        //include "Lib::common.xjs";
        var legaladvOutReqLyrid='';

        //form onload
        this.out_legal_ad_up_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	legaladvOutReqLyrid = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	//legaladvOutReqLyrid = "2013081903";
        	
        	this.gf_codeComListLoad("ds_combo_sep", "ds_combo_sep", "Y", "", "전체", "fnCallback", "O01"); //법률자문 구분코드
        	this.cal_01.set_value(this.gfn_Today());
        	this.legal_ad_list();
        }

        //법률자문 list 불러오기
        this.legal_ad_list = function()
        {		
        	this.ds_search.setColumn(0, "legaladvOutReqLyrid", legaladvOutReqLyrid	);
        	var legaladvLawAdvReqNo = this.edt_00.value;
        	var legaladvReqDate1 = this.cal_00.value;
        	var legaladvReqDate2 = this.cal_01.value;
        	var legaladvRepWtr = this.Radio00.value;
        	var legaladvLawAdvCode = this.cb_00.value;
        	
        	
            //기간 유효성체크
            if(!this.gfn_IsNull(legaladvReqDate1) && (legaladvReqDate1 > legaladvReqDate2)){
        		alert("날짜를 확인해 주세요.");
        		this.cal_01.set_value = '';
        		this.cal_01.dropdown();
        		return;
            }
        	
        	/*
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "legaladvOutReqLyrid", legaladvOutReqLyrid	);
        	this.ds_search.setColumn(nRow, "legaladvLawAdvReqNo", legaladvLawAdvReqNo	);
        	this.ds_search.setColumn(nRow, "legaladvReqDate1"	, legaladvReqDate1		);
        	this.ds_search.setColumn(nRow, "legaladvReqDate2"	, legaladvReqDate2		);
        	this.ds_search.setColumn(nRow, "legaladvRepWtr"		, legaladvRepWtr		);
        	this.ds_search.setColumn(nRow, "legaladvLawAdvCode"	, legaladvLawAdvCode	);
        	*/
        	
        	var strSvcid = "outLegalAdList";
        	var strController = "/out/outLegalAdUpList.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search",
        						"ds_legal_ad=ds_output",
        						"",
        						"fnCallback");
        	
        }

        //callback 함수
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode <0)
        	{
        		this.alert(sSvcId+" : "+sErrorMsg)
        		return;
        	}
        	
        	if(sSvcId == "ds_combo_sep")
        	{
        		//trace("법률구분코드 불러오기 완료");
        	}
        	
        	if(sSvcId == "outLegalAdList")
        	{
        		//trace("법률자문 조회성공");
        	}
        }

        //초기화 버튼 클릭
        this.Button02_onclick = function(obj,e)
        {
        	//this.reload();
        	this.edt_00.set_value();
        	this.cal_00.set_value();
        	this.cal_01.set_value();
        	this.Radio00.set_index(0);
        	this.cb_00.set_index(0);
        }

        //검색 버튼 클릭
        this.Button01_onclick = function(obj,e)
        {
        	this.legal_ad_list();
        }

        //회신버튼 클릭
        this.grid_cellclick = function(obj,e)
        {
        	var name	= this.gfnGridGetClickedBindingText(obj, e.cell);
        	var dsObj	= obj.getBindDataset();
        	
        	if(name == '회신')
        	{
        		var legaladvLawAdvReqNo = dsObj.getColumn(e.row, "legaladvLawAdvReqNo");
        		
        		var param = {	
        						"legaladvLawAdvReqNo":legaladvLawAdvReqNo
        					,	"legaladvOutReqLyrid":legaladvOutReqLyrid
        					};
        		trace("JSON :: "+JSON.stringify(param));
        		this.gfnOpenMenu("out::OUT_legal_ad_re", param);
        	}
        	
        	/*
        	if(this.out_legal_ad_grd_.getCellPos() == 7)
        	{
        		var text = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        		var lyrid = application.gds_User.getColumn(application.gds_User.rowposition,"sabun");
        		//var lyrid = "2013082601";
        		trace("법률자문 no : "+text);
        		trace("cell pos : "+this.out_legal_ad_grd_.getCellPos());
        		//정보저장
        		application.gds_legalad.addRow();
        		application.gds_legalad.setColumn(application.gds_legalad.rowposition, "legaladvLawAdvReqNo", text);
        		application.gds_legalad.setColumn(application.gds_legalad.rowposition, "legaladvOutReqLyrid", lyrid);
        		
        		trace("~~~~~~~~~~~~~~~~"+application.gds_legalad.getColumn(application.gds_legalad.rowposition, "legaladvLawAdvReqNo"));
        		trace("~~~~~~~~~~~~~~~~"+application.gds_legalad.getColumn(application.gds_legalad.rowposition, "legaladvOutReqLyrid"));
        		
        		//페이지 이동
        		//project 실행시 go로 이동하면 창 꺼진다.
        		//this.go("out::OUT_legal_ad_re_skw.xfdl");
        		this.ds_menu.assign(application.gds_menu);
        		
        		var oObj = {
                  ds    : this.ds_menu,   // 메뉴 dataset 
                  nRow  : 25,          // 선택된
                  oArgs : []              //넘길 argument
        		};
            
        		Iject.Mdi.call(this,oObj);
        		
        	}
        	*/
        }

        //닫기 버튼
        this.Button00_onclick = function(obj,e)
        {
        	this.gfnClose();
        }

        this.out_legal_ad_grid_onheadclick = function(obj,e)
        {
        	this.gfnGridHeadSort(obj.getBindDataset(), e.cell);
        }

        this.Calendar00_onchanged = function(obj,e)
        {
        	if(!this.gfn_IsNull(obj.value))		this.cal_01.set_enable(true);
        	else								this.cal_01.set_enable(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.out_legal_ad_up_onload, this);
            this.out_legal_ad_grd_.addEventHandler("oncellclick", this.grid_cellclick, this);
            this.out_legal_ad_grd_.addEventHandler("onheadclick", this.out_legal_ad_grid_onheadclick, this);
            this.btn_01.addEventHandler("onclick", this.Button01_onclick, this);
            this.btn_02.addEventHandler("onclick", this.Button02_onclick, this);
            this.btn_00.addEventHandler("onclick", this.Button00_onclick, this);
            this.cal_00.addEventHandler("onchanged", this.Calendar00_onchanged, this);

        };

        this.loadIncludeScript("OUT_legal_ad_up.xfdl");

       
    };
}
)();
