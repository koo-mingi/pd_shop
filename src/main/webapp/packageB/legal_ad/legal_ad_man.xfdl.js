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
                this.set_name("legal_ad_man");
                this.set_classname("legal_ad_man");
                this.set_titletext("법률관계자 등록");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_legalOfclType", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_official", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoLyrPsw\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoRelaSep\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoTeamname\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoLyrName\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoMail\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoPhone\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoHdpn\" type=\"string\" size=\"32\"/><Column id=\"legalOfficialinfoCityCode\" type=\"string\" size=\"32\"/><Column id=\"rownum\" type=\"INT\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sido", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legalOfclTypeLst", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legalOfclType2", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">0</Col><Col id=\"codenm\">직접 입력</Col></Row><Row><Col id=\"codeno\">1</Col><Col id=\"codenm\">naver.com</Col></Row><Row><Col id=\"codeno\">2</Col><Col id=\"codenm\">daum.net</Col></Row><Row><Col id=\"codeno\">3</Col><Col id=\"codenm\">hotmail.com</Col></Row><Row><Col id=\"codeno\">4</Col><Col id=\"codenm\">hanmail.net</Col></Row><Row><Col id=\"codeno\">5</Col><Col id=\"codenm\">nate.com</Col></Row><Row><Col id=\"codeno\">6</Col><Col id=\"codenm\">yahoo.co.kr</Col></Row><Row><Col id=\"codeno\">7</Col><Col id=\"codenm\">paran.com</Col></Row><Row><Col id=\"codeno\">8</Col><Col id=\"codenm\">empas.com</Col></Row><Row><Col id=\"codeno\">9</Col><Col id=\"codenm\">dreamwiz.com</Col></Row><Row><Col id=\"codeno\">10</Col><Col id=\"codenm\">freechal.com</Col></Row><Row><Col id=\"codeno\">11</Col><Col id=\"codenm\">lycos.co.kr</Col></Row><Row><Col id=\"codeno\">12</Col><Col id=\"codenm\">korea.com</Col></Row><Row><Col id=\"codeno\">13</Col><Col id=\"codenm\">gmail.com</Col></Row><Row><Col id=\"codeno\">14</Col><Col id=\"codenm\">hanmir.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_00", "absolute", "14", "139", "996", "283", null, null, this);
            obj.set_taborder("81");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("65");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img02", "absolute", "14", "490", "996", "109", null, null, this);
            obj.set_taborder("64");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "188", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("법률관계자 등록");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("관계자 구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_req_noti_src", "absolute", "889", "70", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "948", "70", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "351", "70", "115", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("성명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_legalOfclType", "absolute", "141", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_legalOfclType");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left");

            obj = new Edit("edt_srcLegalOfclName", "absolute", "471", "73", "140", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "17", "123", "100", "13", null, null, this);
            obj.set_taborder("23");
            obj.set_text("법률관계자 정보");
            obj.style.set_color("#46463dff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "145", "984", "271", null, null, this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_official");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 9 dotum;\" text=\"No\"/><Cell col=\"1\" style=\"font:bold 9 dotum;\" text=\"법률관계자번호\"/><Cell col=\"2\" style=\"font:bold 9 dotum;\" text=\"관계자구분\"/><Cell col=\"3\" style=\"font:bold 9 dotum;\" text=\"소속명\"/><Cell col=\"4\" style=\"font:bold 9 dotum;\" text=\"성명\"/><Cell col=\"5\" style=\"font:bold 9 dotum;\" text=\"이메일\"/><Cell col=\"6\" style=\"font:bold 9 dotum;\" text=\"연락처\"/><Cell col=\"7\" style=\"font:bold 9 dotum;\" text=\"휴대전화\"/><Cell col=\"8\" style=\"font:bold 9 dotum;\" text=\"지역\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\"/><Cell col=\"1\" text=\"bind:legalOfficialinfoRelaNo\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:legalOfficialinfoRelaSep\" combodataset=\"ds_legalOfclType\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"3\" text=\"bind:legalOfficialinfoTeamname\"/><Cell col=\"4\" text=\"bind:legalOfficialinfoLyrName\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:legalOfficialinfoMail\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:legalOfficialinfoPhone\" mask=\"expr:legalOfficialinfoPhone.length == &quot;9&quot;? &quot;##-###-####&quot; : legalOfficialinfoPhone.length == &quot;11&quot;? &quot;###-####-####&quot; : (legalOfficialinfoPhone.substr(0,2) == &quot;02&quot; &amp;&amp; legalOfficialinfoPhone.length == &quot;10&quot;)? &quot;##-####-####&quot; : &quot;###-###-####&quot;\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"masknumber\" text=\"bind:legalOfficialinfoHdpn\" mask=\"expr:legalOfficialinfoHdpn.length == &quot;11&quot;? &quot;###-####-####&quot; : &quot;###-###-####&quot;\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:legalOfficialinfoCityCode\" combodataset=\"ds_sido\" combocodecol=\"codeno\" combodatacol=\"codenm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "17", "468", "197", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_text("법률관계자 상세정보");
            obj.style.set_color("#46463dff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "23", "496", "981", "25", null, null, this);
            obj.set_taborder("38");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "20", "496", "115", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("법률관계자번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "23", "520", "981", "25", null, null, this);
            obj.set_taborder("39");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "23", "544", "981", "25", null, null, this);
            obj.set_taborder("40");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "23", "568", "981", "25", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no02", "absolute", "20", "520", "115", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("소속명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no03", "absolute", "20", "568", "115", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("이메일");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no04", "absolute", "20", "544", "115", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("시/도");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no05", "absolute", "351", "496", "115", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("관계자구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no06", "absolute", "351", "520", "115", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("성명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no07", "absolute", "682", "544", "115", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("연락처");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no08", "absolute", "351", "544", "115", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("휴대전화");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no09", "absolute", "682", "520", "115", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("비밀번호확인");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no10", "fixed", "682", "496", "115", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("비밀번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_psw", "absolute", "802", "499", "140", "19", null, null, this);
            obj.set_taborder("15");
            obj.set_maxlength("10");
            obj.set_password("true");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_pswconfirm", "absolute", "802", "523", "140", "19", null, null, this);
            obj.set_taborder("16");
            obj.set_password("true");
            obj.set_maxlength("10");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_legalAdSido", "absolute", "141", "547", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@ds_sido");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left");

            obj = new Combo("cbo_legalAdSep", "absolute", "471", "499", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_legalOfclType2");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left");

            obj = new Edit("edt_req_no", "absolute", "141", "499", "140", "19", null, null, this);
            obj.set_taborder("37");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_teamname", "absolute", "141", "523", "140", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_inputfilter("dot,comma,sign,symbol,digit,space");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_email", "absolute", "141", "571", "140", "19", null, null, this);
            obj.set_taborder("9");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_name", "absolute", "471", "523", "140", "19", null, null, this);
            obj.set_taborder("12");
            obj.set_inputfilter("dot,comma,sign,symbol,digit,space");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "835", "429", "55", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "895", "429", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "955", "429", "55", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "226", "431", "573", "18", null, null, this);
            obj.set_taborder("42");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("13");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("14");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("16");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("18");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("20");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("21");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new MaskEdit("edit_phone", "absolute", "802", "547", "140", "19", null, null, this);
            obj.set_taborder("62");
            obj.set_clipmode("excludespace");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edit_handphone", "absolute", "471", "547", "140", "19", null, null, this);
            obj.set_taborder("63");
            obj.set_type("string");
            obj.set_clipmode("excludespace");
            obj.set_mask("###-####-####");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_legalAdemail", "absolute", "460", "571", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_innerdataset("@ds_email");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left");
            obj.set_index("-1");

            obj = new Static("Static00", "absolute", "296", "567", "30", "30", null, null, this);
            obj.set_taborder("68");
            obj.set_text("@");
            obj.style.set_font("9 굴림");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_email00", "absolute", "320", "571", "140", "19", null, null, this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "366", "503", "18", "22", null, null, this);
            obj.set_taborder("70");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "48", "526", "18", "22", null, null, this);
            obj.set_taborder("71");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "385", "526", "18", "22", null, null, this);
            obj.set_taborder("72");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "689", "526", "18", "22", null, null, this);
            obj.set_taborder("73");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "50", "550", "18", "22", null, null, this);
            obj.set_taborder("74");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "371", "550", "18", "22", null, null, this);
            obj.set_taborder("75");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "709", "550", "18", "22", null, null, this);
            obj.set_taborder("76");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "45", "574", "18", "22", null, null, this);
            obj.set_taborder("77");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "702", "502", "18", "22", null, null, this);
            obj.set_taborder("80");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_font("arial,18");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_man");
            		p.set_titletext("법률관계자 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edit_teamname","value","ds_official","legalOfficialinfoTeamname");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edit_name","value","ds_official","legalOfficialinfoLyrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edit_psw","value","ds_official","legalOfficialinfoLyrPsw");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cbo_legalAdSido","value","ds_official","legalOfficialinfoCityCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cbo_legalAdSep","value","ds_official","legalOfficialinfoRelaSep");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_req_no","value","ds_official","legalOfficialinfoRelaNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edit_phone","value","ds_official","legalOfficialinfoPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edit_handphone","value","ds_official","legalOfficialinfoHdpn");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_man.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_man.xfdl", function() {
        //include "Lib::common.xjs";

        var pageNum = "";
        var rowNum = "";

        this.confirmStr = "";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        
        //처음 로딩시 
        this.legal_ad_man_onload = function(obj,e)
        {
        	this.btn_depo_search_onclick();
        	this.gf_codeComListLoad("ds_legalOfclType",  "ds_legalOfclType",  "Y", "", "전체", "fnCallback", "O02"); //법률관계자 구분코드 조회
        	this.gf_codeComListLoad("ds_sido",  "ds_sido",  "Y", "", "선택", "fnCallback", "Q01");   //시도 코드 조회	
        }

        
        //콜백함수
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	switch (sSvcId)
        	{
        		case "ds_legalOfclType":	// id 구분
        			this.fn_dsFilter();			//공통코드 필터 및 복사 		
        			this.cbo_legalOfclType.set_index(0);
        			this.gf_codeComListLoad("ds_sido",  "ds_sido",  "Y", "", "선택", "fnCallback", "Q01");   //시도 코드 조회	
        		break;
        		
        		case "selectLegalOfclList":
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				this.ds_official.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        					if (this.ds_official.getRowCount() == 0)
        					{
        						alert("더이상 조회할 자료가 없습니다.");
        						this.ds_official.filter("");
        						return;
        					}
        					else
        					{
        						this.fv_iServerRowCount = this.ds_official.getRowCount();
        						this.fn_SetStyle();
        						this.fn_SetPageNo();
        						this.div_page.stc_No0.style.set_color("black");
        					} 
        					
        				if(pageNum == 0){
        					pageNum = 1;
        				}
        				trace("rowNum : " + rowNum);
        				this.pageSelect(pageNum);
        				this.Grid00.selectCell(rowNum);
        				
        				this.edit_phone_onkillfocus();
        				this.edit_handphone_onkillfocus();
        				
        				this.edit_pswconfirm.set_value("");
        				//this.alert("조회 완료");
        				
        				/*
        				// 이메일 split
        				var mail = this.ds_official.getColumn(rowNum, "legalOfficialinfoMail");
        				var arr = mail.split("@");				
        				trace("arr=========" + arr); // 
         				trace("arr[0]=============" + arr[0]);
         				trace("arr[1]=============" + arr[1]);
        				
        				this.edit_email.set_value(arr[0]+"");
        				this.edit_email00.set_value(arr[1]+"");
        				*/
        				this.Grid00_oncellclick(this.Grid00,{"row":0});
        				
        				
        		break;
        		
        		case "deleteLegalOfclList":
        			alert("삭제 되었습니다");
        			this.search_out();
        		break;
        		
        		case "saveLegalOfclList":
        			if(this.confirmStr == "저장"){
        				this.alert("저장 되었습니다");
        				this.search_out();
        				
        			}else if(this.confirmStr == "수정"){
        				this.alert("수정 되었습니다");
        				this.search_out();
        			}
        		break;
        		
        		
        	}
        }

        //공통코드 필터 및 DS 복사
        this.fn_dsFilter=function(){
        	
        	this.ds_legalOfclType.filter("codenm != '전체'");
        	this.ds_legalOfclType2.copyData(this.ds_legalOfclType);
        	
        	this.ds_legalOfclType2.setColumn(0,"codeno","");
        	this.ds_legalOfclType2.setColumn(0,"codenm","선택");
        						
        	this.ds_legalOfclType.filter("");
        }

        //검색 함수
        this.search_out = function()
        {
        	this.ds_official.clearData();		//데이터셋 초기화
        	
        	//페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	
        	
        	var srcLegalOfclType = this.gfn_Trim(this.cbo_legalOfclType.value);
        	var srcLegalOfclName = this.gfn_Trim(this.edt_srcLegalOfclName.value);
        	
        	var strSvcid 		= "selectLegalOfclList";
        	var strController 	= "legal_ad/selectLegalOfclList.do";
        	var strParam = "srcLegalOfclType="		+ srcLegalOfclType;
        		strParam += " srcLegalOfclName="		+ srcLegalOfclName;
        	
        	
        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"", 
        					"ds_official=ds_output",
        					strParam, 
        					"fnCallback"
        					);
        }

        //검색 버튼
        this.btn_depo_search_onclick = function(obj,e)
        {
        	rowNum = 0;
        	pageNum = 1;
        	
        	this.search_out();
        }

        //추가 
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_official.addRow();
        	this.cbo_legalAdSep.set_index(0);
        	this.cbo_legalAdSido.set_index(0);
        }

        //저장(수정)
        this.btn_save_onclick = function(obj,e)
        {
        	var yn = confirm("저장하시겠습니까?");
        	
        	if(yn == true){
        		if(this.gfn_IsNull(this.edit_teamname.value)){
        			alert("소송명을 입력해주세요.");
        			this.edit_teamname.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edit_email.value)){
        			alert("이메일을 입력해주세요.");
        			this.edit_email.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cbo_legalAdSido.value)){
        			alert("시/도를 입력해주세요.");
        			this.cbo_legalAdSido.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cbo_legalAdSep.value)){
        			alert("관계자구분을 입력해주세요.");
        			this.cbo_legalAdSep.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edit_name.value)){
        			alert("성명을 입력해주세요.");
        			this.edit_name.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edit_phone.value)){
        			alert("연락처를 입력해주세요.");
        			this.edit_phone.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edit_handphone.value)){
        			alert("휴대전화를 입력해주세요.");
        			this.edit_handphone.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edit_psw.value)){
        			alert("비밀번호를 입력해주세요.");
        			this.edit_psw.setFocus();
        		}
        		else if(this.edit_psw.value != this.edit_pswconfirm.value){
        			alert("비밀번호가 일치하지 않습니다. 다시 확인해 주세요.");
        			this.edit_pswconfirm.setFocus();
        		}
        		else{
        			
        			// 이메일 합치기
        			var mailStr = this.edit_email.value + "@" + this.edit_email00.value;
        			this.ds_official.setColumn(this.ds_official.rowposition, "legalOfficialinfoMail", mailStr);
        			
        			var strSvcid = "saveLegalOfclList";
        			var strController = "legal_ad/saveLegalOfclList.do";
        			
        			var strParam = "";
        			
        			rowNum = this.ds_official.rowposition;
        			
        			this.gfn_transaction(this
        							,strSvcid
        							,strController
        							,"ds_input=ds_official:U"
        							,""
        							,strParam
        							,"fnCallback");
        		}
        	}
        }

        //초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	this.reload();
        }

        //삭제처리
        this.btn_del_onclick = function(obj,e)
        {
        	if(this.gfn_IsNull(this.edt_req_no.value) || this.ds_official.getRowCount() <= 0){
        		alert("삭제할 외부법률관리자가 존재하지 않습니다.");
        	}
        	else{
        		var yn = confirm("해당 외부법률관리자를 삭제하시겠습니까?");
        		
        		if(yn == true){
        			if(this.edit_psw.value != this.edit_pswconfirm.value){
        				alert("비밀번호가 일치하지 않습니다. 다시 확인해 주세요.");
        				this.edit_pswconfirm.setFocus();
        				return;
        			}
        			
        			var nRow = this.ds_official.rowposition;
        			
        			this.ds_official.deleteRow(nRow);
        		
        			var strSvcid = "deleteLegalOfclList";
        			var strController = "legal_ad/saveLegalOfclList.do";
        			
        			var strParam = "";
        			
        			this.gfn_transaction(this
        						,strSvcid
        						,strController
        						,"ds_input=ds_official:U"
        						,""
        						,strParam
        						,"fnCallback");
        		}
        	}
        }

        

        

        //페이징처리 부분-----------------------------------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	
        	pageNum = iNo;
        	
        	this.pageSelect(iNo);
        	
        }

        this.pageSelect = function(page)
        {
        	var iFirstNum = (page-1) * this.fv_iMaxPageNum + 1;
        	
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	this.fn_SetStyle();
        	this.div_page.components["stc_No"+(page-1)].style.set_color("black");
        	this.ds_official.filter("");
        	this.ds_official.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
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
        		this.div_page.components["stc_No"+i].style.set_color("gray");			
        	}	
        }

        

        
        this.edit_phone_onkillfocus = function(obj,e)
        {
        	if(this.edit_phone.getLength() == "-1"){
        		return;
        	}
        	if(this.edit_phone.getLength() == "9"){
        		this.edit_phone.set_mask("##-###-####")
        	}else if(this.edit_phone.getLength() == "10"){
        		if((this.edit_phone.value).substr(0,2) == "02"){
        			this.edit_phone.set_mask("##-####-####")
        		}else{
        			this.edit_phone.set_mask("###-###-####")
        		}
        	}else if(this.edit_phone.getLength() == "11"){
        		this.edit_phone.set_mask("###-####-####")
        	}else{
        		alert("연락처가 올바르게 적혔는지 확인해주세요");
        		this.edit_phone.setFocus();
        	}
        }

        this.edit_phone_onsetfocus = function(obj,e)
        {
        	this.edit_phone.set_mask("###-####-####")
        }

        

        this.edit_handphone_onkillfocus = function(obj,e)
        {
        	if(this.edit_handphone.getLength() == "-1"){
        		return;
        	}
        	if(this.edit_handphone.getLength() == "11"){
        		this.edit_handphone.set_mask("###-####-####")
        	}else if(this.edit_handphone.getLength() == "10"){
        		this.edit_handphone.set_mask("###-###-####")
        	}else{
        		alert("연락처가 올바르게 적혔는지 확인해주세요");
        		this.edit_handphone.setFocus();
        	}
        }

        this.edit_handphone_onsetfocus = function(obj,e)
        {
        	this.edit_handphone.set_mask("###-####-####")
        }

        this.Grid00_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();	
        	var cRow = obj.getDatasetRow(e.row);
        	
        	// 이메일 split
        	var mail = dataSet.getColumn(cRow, 'legalOfficialinfoMail');
        	var arr = mail.split("@");				
        	//trace("arr=========" + arr); // 
         	//trace("arr[0]=============" + arr[0]);
         	//trace("arr[1]=============" + arr[1]);
        		
        	this.edit_email.set_value(arr[0]+"");
        	this.edit_email00.set_value(arr[1]+"");
        	
        	this.edit_phone_onkillfocus();
        	this.edit_handphone_onkillfocus();
        }

        this.Grid00_onkeyup = function(obj,e)
        {
        	this.edit_phone_onkillfocus();
        	this.edit_handphone_onkillfocus();
        }

        
        // 이메일 콤보박스 
        this.cbo_legalAdemail_onitemchanged = function(obj,e)
        {	
        	var row = this.cbo_legalAdemail.value;
        	trace("row=================" + row);
        	var mail = this.ds_email.getColumn(row, "codenm");
        	trace("mail================" + mail);
        	
        	// 이메일 뒷부분에 값 넣기
        	this.edit_email00.set_value(mail+"");
         	

        }

        

        
        // // 이메일 콤보박스 수정시 자동으로 값 넣기
        // this.edit_email00_onchanged = function(obj:Edit, e:nexacro.ChangeEventInfo)
        // {
        // 	var mailFin = this.edit_email00.value;
        // 	trace("mailFin=============" + mailFin);
        // 	var test = this.cbo_legalAdemail.setColumn(this.ds_email.rowposition, "codenm", mailFin);
        // 	trace("TEST================" + test);
        // }

        

        

        

        

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legal_ad_man_onload, this);
            this.sta_01.addEventHandler("onclick", this.sta_01_onclick, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_req_noti_src.addEventHandler("onclick", this.btn_depo_search_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.cbo_legalOfclType.addEventHandler("onitemchanged", this.cbo_legalOfclType_onitemchanged, this);
            this.sta_03.addEventHandler("onclick", this.sta_03_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onkeyup", this.Grid00_onkeyup, this);
            this.sta_00.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no03.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no04.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no05.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no06.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no07.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no08.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no09.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no10.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edit_psw.addEventHandler("oneditclick", this.edit_psw_oneditclick, this);
            this.cbo_legalAdSep.addEventHandler("onitemchanged", this.cbo_legalAdSep_onitemchanged, this);
            this.edit_teamname.addEventHandler("oneditclick", this.edit_Teamname_oneditclick, this);
            this.edit_name.addEventHandler("oneditclick", this.edit_name_oneditclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
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
            this.edit_phone.addEventHandler("onkillfocus", this.edit_phone_onkillfocus, this);
            this.edit_phone.addEventHandler("onsetfocus", this.edit_phone_onsetfocus, this);
            this.edit_handphone.addEventHandler("onkillfocus", this.edit_handphone_onkillfocus, this);
            this.edit_handphone.addEventHandler("onsetfocus", this.edit_handphone_onsetfocus, this);
            this.cbo_legalAdemail.addEventHandler("onitemchanged", this.cbo_legalAdemail_onitemchanged, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.edit_email00.addEventHandler("onchanged", this.edit_email00_onchanged, this);

        };

        this.loadIncludeScript("legal_ad_man.xfdl");

       
    };
}
)();
