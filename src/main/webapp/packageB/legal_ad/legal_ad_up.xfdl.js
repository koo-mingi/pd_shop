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
                this.set_name("legal_ad_up");
                this.set_titletext("법률자문회신");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adv", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOpenWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvFactRela\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvQuesIssu\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtc\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReviDay\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtcRepPoin\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqRepdate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqFact\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqQues\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqReq\" type=\"STRING\" size=\"256\"/><Column id=\"advTit\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgr\" type=\"STRING\" size=\"256\"/><Column id=\"repMgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cost", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"legaladvCostLawadvReqno\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostReqCost\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostStax\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostClamsumChg\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostLawadvSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view03", "absolute", "14", "514", "997", "126", null, null, this);
            obj.set_taborder("61");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 Dotum");
            obj.set_text("  법률자문회신");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("법률자문의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "285", "71", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_01", "absolute", "17", "113", "197", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_text("법률자문 의뢰사항");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "133", "996", "60", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "20", "138", "984", "25", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "20", "162", "984", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "20", "138", "115", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "345", "162", "115", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("의뢰담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no02", "absolute", "679", "138", "115", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("외부자문여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no03", "absolute", "20", "162", "115", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("의뢰부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no04", "absolute", "345", "138", "115", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("검토일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no05", "absolute", "679", "162", "115", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_adv_code", "absolute", "140", "141", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@ds_adv");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_req_mgr", "absolute", "465", "165", "140", "19", null, null, this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_out_req_wtr", "absolute", "799", "141", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("cb_req_dept", "absolute", "140", "165", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("cal_req_date", "absolute", "799", "165", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("cal_revi_day", "absolute", "465", "141", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("subTitle_02", "absolute", "18", "216", "197", "19", null, null, this);
            obj.set_taborder("26");
            obj.set_text("법률자문회신");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "234", "997", "233", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "20", "239", "985", "25", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "263", "985", "25", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "287", "985", "100", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "20", "386", "985", "74", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_03", "absolute", "17", "498", "197", "19", null, null, this);
            obj.set_taborder("32");
            obj.set_text("자문비내역");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cost", "absolute", "21", "521", "983", "112", null, null, this);
            obj.set_taborder("33");
            obj.set_scrollbars("autoboth");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_binddataset("ds_cost");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"486\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"회신내용\"/><Cell col=\"2\" text=\"자문수수료\"/><Cell col=\"3\" text=\"부가세\"/><Cell col=\"4\" text=\"청구합계금액\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:legaladvCostRepCont\" editlimit=\"4000\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:legaladvCostReqCost\" mask=\"###,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"expr:legaladvCostReqCost*0.1\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"expr:legaladvCostReqCost*1.1\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell displaytype=\"number\" text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\" text=\"총계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;parseInt(legaladvCostReqCost)&quot;)\" calendardisplaynulltext=\"0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:(dataset.getSum(&quot;parseInt(legaladvCostReqCost)&quot;))*0.1\" calendardisplaynulltext=\"0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;parseInt(legaladvCostReqCost)&quot;)+(dataset.getSum(&quot;parseInt(legaladvCostReqCost)&quot;))*0.1\" calendardisplaynulltext=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no06", "absolute", "20", "239", "104", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("회신부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no07", "absolute", "264", "239", "105", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("회신담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no08", "absolute", "511", "239", "105", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("회신일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no09", "absolute", "757", "239", "105", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no10", "absolute", "20", "263", "104", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("회신제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no11", "absolute", "20", "287", "104", "100", null, null, this);
            obj.set_taborder("40");
            obj.set_text("회신내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no12", "absolute", "20", "386", "104", "74", null, null, this);
            obj.set_taborder("41");
            obj.set_text("기타회신사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_rep_dept", "absolute", "129", "242", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_rep_mgr", "absolute", "374", "242", "130", "19", null, null, this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_open_wtr", "absolute", "867", "242", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Calendar("cal_rep_date", "absolute", "621", "242", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_rep_tit_nosize", "absolute", "129", "266", "870", "19", null, null, this);
            obj.set_taborder("46");
            obj.set_maxlength("100");
            obj.set_lengthunit("utf8");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_rep_cont", "absolute", "129", "290", "870", "94", null, null, this);
            obj.set_taborder("47");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("255");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_rep_poin", "absolute", "129", "390", "870", "66", null, null, this);
            obj.set_taborder("48");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("255");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cost_del", "absolute", "956", "484", "55", "23", null, null, this);
            obj.set_taborder("49");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cost_add", "absolute", "896", "484", "55", "23", null, null, this);
            obj.set_taborder("50");
            obj.set_text("추가");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "55.47%", "265", null, "21", "37.79%", null, this);
            obj.set_taborder("57");
            obj.set_text("0 / 100");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "89.55%", "364", null, "21", "3.71%", null, this);
            obj.set_taborder("58");
            obj.set_text("0 / 255");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div08", "absolute", "89.55%", "439", null, "11", "3.71%", null, this);
            obj.set_taborder("59");
            obj.set_text("0 / 255");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "956", "647", "55", "23", null, null, this);
            obj.set_taborder("60");
            obj.set_text("저장");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static20", "absolute", "32", "263", "37", "23", null, null, this);
            obj.set_taborder("62");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "32", "326", "37", "23", null, null, this);
            obj.set_taborder("63");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 69, 21, this.Div07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.set_text("0 / 255");
            		p.set_visible("false");

            	}
            );
            this.Div07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_up");
            		p.set_titletext("법률자문회신");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_req_no","value","ds_legal_ad","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cb_adv_code","value","ds_legal_ad","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_req_mgr","value","ds_legal_ad","reqMgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cb_out_req_wtr","value","ds_legal_ad","legaladvOutReqWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cb_req_dept","value","ds_legal_ad","legaladvReqDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cal_req_date","value","ds_legal_ad","legaladvReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cal_revi_day","value","ds_legal_ad","legaladvReviDay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cb_rep_dept","value","ds_legal_ad","legaladvRepDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_rep_mgr","value","ds_legal_ad","repMgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cb_open_wtr","value","ds_legal_ad","legaladvRepWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cal_rep_date","value","ds_legal_ad","legaladvRepDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_rep_tit_nosize","value","ds_legal_ad","legaladvRepTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_rep_cont","value","ds_legal_ad","legaladvRepCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","txt_rep_poin","value","ds_legal_ad","legaladvEtcRepPoin");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_up.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_up.xfdl", function() {
        //include "Lib::common.xjs";

        this.g_repNo = "";

        this.legal_ad_up_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	this.gf_codeComListLoad("dsComCode",  "ds_dept",  "N", "", "", "fnCallback", "S01");//S01?? // 공통코드(부서)조회
        	this.gf_codeComListLoad("dsComCode",  "ds_adv",   "N", "", "", "fnCallback", "O01"); // 공통코드(법률자문)조회

        	/*
        	//gds의 저장된 파라미터값 불러오기
        	var v_rtnArr = new Array();
        	for(var ii=0; i<application.gds_Params.getRowCount(); ii++)
        	{
        		v_rtnArr[ii] = application.gds_Params.getColumn(ii, "PARAM_VAL");
        	}
        	application.gds_Params.clearData();
        	
        	if(!this.gfn_IsNull(v_rtnArr)){
        		this.ds_legal_ad.clearData();
        		this.ds_cost.clearData();
        		this.modal_selectlegal_ad(v_rtnArr[0]);
        	}else{
        		this.ds_legal_ad.addRow();
        		
        		//현재 로그인중인 사원정보 세팅
        		//다른 창에서는 이부분에서 했는데 여기서는 콜백함수 안에서 세팅함
        		//왜 그러는지 분석해보자.
        		var mgrCode = application.gds_User.getColumn(0,"sabun");
        		var mgrName = application.gds_User.getColumn(0,"name");

        		this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "repMgr", mgrName);
        		this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvRepMgrCode", mgrCode);
        		this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvRepDeptCode",application.gds_User.getColumn(application.gds_User.rowposition,"insaDeptCode"));
        	}
        	*/
        	//넘겨받은 parameter 셋팅
        	var rtnObj = this.gfnGetArgument();
        	
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        		this.ds_legal_ad.clearData();
        		this.ds_cost.clearData();
        		this.modal_selectlegal_ad(rtnObj.legaladvLawAdvReqNo);
        	}
        	else
        	{
        		this.ds_legal_ad.addRow();
        		this.btn_cost_add.set_visible(false);
        		this.btn_cost_del.set_visible(false);
        	}
        }

        //초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_legal_ad.clearData();
        	this.ds_cost.clearData();
        	
        	this.btn_cost_add.set_visible(false);
        	this.btn_cost_del.set_visible(false);
        	//this.reload();
        }

        //검색(모달창)
        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	 //this.reload();
        	 var newChild = new ChildFrame;
        	 newChild.init("Search01"
        					, "absolute", 10, 10, 300, 250, null, null
        					, "legal_ad::legal_ad_no.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						,''
        						, this
        						, "modal_callback");
        }

        
        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Search01")
        	{
        		this.modal_selectlegal_ad(variant);
        	}
        }

        //모달창에서 받아온 값으로 검색
        this.modal_selectlegal_ad = function(variant)
        {
        	if(this.gfn_IsNull(variant))	return;
        	
        	this.g_repNo = variant;
        	this.select_legad(variant);	
        	this.select_cost(variant);
        }

        //법률자문의뢰(회신)조회
        this.select_legad = function(variant){

        	var strSvcid 		= "selectLegalList";
        	var strController 	= "legal_ad/selectLegalAdDetail.do";
        	var strParam 		=  "legaladvLawAdvReqNo="+variant;

        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"",  
        					"ds_legal_ad=ds_output",
        					strParam, 
        					"fnCallback"
        					);
        }

        // 자문비 조회
        this.select_cost = function(variant){
        		
        	var strSvcid 		= "selectLegalCostList";
        	var strController 	= "legal_ad/selectCost.do";
        	var strParam 		= "legaladvCostLawadvReqno=" + variant
        	
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"", 
        					"ds_cost=ds_output",
        					strParam, 
        					"fnCallback"
        					);
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
        		case "saveLegalAdRep":	// 저장(법률자문 저장할 때 자문비 같이 저장)
        			var legaladv = this.ds_legal_ad.getColumn(0,'legaladvLawAdvReqNo');
        			for(var i=0; i<this.ds_cost.rowcount; i++)
        			{
        				this.ds_cost.setColumn(i,"legaladvCostLawadvReqno",legaladv);
        			}
        			
        			alert("회신내용을 저장하였습니다.");
        			this.select_legad(this.g_repNo);	
        		break;
        		
        		case "saveCost":	// 자문비 저장되고 나서 저장메시지 출력 + 화면에 현재 저장된 내용 보여줌		
        			
        			alert("자문비내용을 저장였습니다.");
        			this.select_cost(this.g_repNo);
        		break;
        		
        		case "saveCost":
        			alert("자문비내역을 삭제하였습니다.");
        			this.select_cost(this.g_repNo);
        		break;
        		
        		case "selectLegalList":		// 조회
        			/***************************추가****************************/
        			var mgrCode	= application.gds_User.getColumn(application.gds_User.rowposition,	"sabun"			);
        			var mgrName	= application.gds_User.getColumn(application.gds_User.rowposition,	"name"			);
        			var deptCode= application.gds_User.getColumn(application.gds_User.rowposition,	"insaDeptCode"	);
        			
        			if(deptCode == '004')
        			{
        				if(this.cb_open_wtr.value == 'N')
        				{
        					if(this.cb_out_req_wtr.value == 'N')
        					{
        						var cRow = this.ds_legal_ad.rowposition;
        						this.ds_legal_ad.setColumn(cRow,"legaladvRepDeptCode",deptCode);
        						this.ds_legal_ad.setColumn(cRow,"legaladvRepMgrCode",mgrCode);
        						this.ds_legal_ad.setColumn(cRow,"repMgr",mgrName);
        						this.cal_rep_date.set_value(this.gfn_Today());
        						this.cal_revi_day.set_value(this.gfn_Today());
        						this.fnCompEnable(true);
        					}
        					else
        					{
        						this.fnCompEnable(false);
        					}
        				}
        				else
        				{
        					if(this.cb_out_req_wtr.value=='Y')	this.fnCompEnable(false);
        					else								this.fnCompEnable(true,false);
        				}
        			}
        			else
        			{
        				this.fnCompEnable(false);
        			}
        			/*************************************************************/
        			/*
        			trace("+++__+++"+this.cb_rep_dept.value);
        			
        			if(this.gfn_IsNull(this.cb_rep_dept.value) || this.gfn_IsNull(this.edt_rep_mgr.value))
        			{
        				this.cb_rep_dept.set_value(application.gds_User.getColumn(application.gds_User.rowposition,"insaDeptCode"));
        				this.edt_rep_mgr.set_value(application.gds_User.getColumn(application.gds_User.rowposition,"name"));
        			}
        			else
        			{
        				trace("회신부서 code : "+this.cb_rep_dept.value);
        				trace("회신담당자 : "+this.edt_rep_mgr.value);
        			}
        			
        			
        			// 회신여부가 'N'이고 검토일자가 null인 경우, 검토일자를 오늘 날짜로 세팅
        			if(this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvRepWtr") == 'N'  
        						&& this.gfn_IsNull(this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvReviDay"))){
        						
        				//this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvReviDay", this.gfn_Today());
        				this.cal_rep_date.set_value(this.gfn_Today());
        			}
        			
        			// 회신여부가 'N'이고 회신일자가 null인 경우, 회산일자를 오늘 날짜로 세팅
        			if(this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvRepWtr") == 'N' 
        						&& this.gfn_IsNull(this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvRepDate"))){
        						
        				//this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvRepDate", this.gfn_Today());
        				this.cal_rep_date.set_value(this.gfn_Today());
        			}
        			*/
        			
        			//필요 없는 기능??
        			// 글자수 표시
        			/*
        			var strLength = this.edt_rep_tit_nosize.getLength();
        			strLength += " / 100 ";
        			this.Div06.set_text(strLength);

        			var strLength = this.txt_rep_cont.getLength();
        			strLength += " / 255 ";
        			this.Div07.set_text(strLength);

        			var strLength = this.txt_rep_poin.getLength();
        			strLength += " / 255 ";
        			this.Div08.set_text(strLength);
        			*/
        			
        			//alert("조회완료");
        			break;
        			
        		// 자문비 내역 보여주는 곳
        		case "selectLegalCostList":
        			/*
        			if(this.gfn_IsNull(this.ds_cost.getColumn(this.ds_cost.rowposition, "legaladvCostRepCont")))
        			{
        				//alert("자문비 내역이 없습니다.");
        			}
        			else
        			{
        				if(this.cb_out_req_wtr.value == "Y" || this.cb_out_req_wtr.value==null)
        				{
        				this.edt_rep_tit_nosize.set_enable(false);
        				this.txt_rep_cont.set_enable(false);
        				this.txt_rep_poin.set_enable(false);
        				this.btn_cost_add.set_visible(false);
        				this.btn_cost_del.set_visible(false);
        				this.grd_cost.set_enable(false);
        				}
        				else
        				{
        					this.edt_rep_tit_nosize.setFocus();
        				}
        			}
        			*/
        			break;
        		case "selectNext":
        			this.fnMoveScreen();
        			break;
        	}
        }

        this.fnCompEnable = function(bCheck,bCheckFur)
        {
        	this.cb_out_req_wtr.set_enable(bCheck);
        	this.edt_rep_tit_nosize.set_enable(bCheck);	
        	this.txt_rep_cont.set_enable(bCheck);
        	this.txt_rep_poin.set_enable(bCheck);
        	this.btn_cost_add.set_visible(bCheck);
        	this.btn_cost_del.set_visible(bCheck);
        	this.grd_cost.set_enable(bCheck);
        	this.btn_save.set_visible(bCheck);
        	
        	if(!this.gfn_IsNull(bCheckFur))	this.cb_out_req_wtr.set_enable(bCheckFur);
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.fnValidation())	return;
        	
        	var bLegal=this.gfnDsChangeCheck(this.ds_legal_ad);
        	var bCost=this.gfnDsChangeCheck(this.ds_cost);
        	
        	if(	!bLegal
        	&&	!bCost)
        	{
        		return alert("저장할 데이터가 없습니다.");
        	}
        	
        	this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition,"legaladvRepWtr", 'Y');
        	if(bLegal)	this.save_legal("saveLegalAdRep");
        	if(bCost)	this.save_cost("saveCost");
        	/*
        	var yn = confirm("저장하시겠습니까?");
        	if(yn == true){
        		if(this.gfn_IsNull(this.edt_req_no.value)){
        			alert("먼저 의뢰 검색을 해주세요.");
        		}
        		else if(this.gfn_IsNull(this.edt_rep_tit_nosize.value)){
        			alert("회신제목을 입력해주세요.");
        			this.edt_rep_tit_nosize.setFocus();
        		}
        		else if(this.gfn_IsNull(this.txt_rep_cont.value)){
        			alert("회신내용을 입력해주세요.");
        			this.txt_rep_cont.setFocus();
        		}
        		else{
        			this.save_legal("saveLegalAdRep");
        			
        		}
        	}
        	*/
        }

        this.fnValidation = function()
        {
        	var legaladvLawAdvReqNo = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	var legaladvRepTit 		= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvRepTit"		);
        	var legaladvRepCont 	= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvRepCont"	);
        	
        	if (this.gfn_IsNull(legaladvLawAdvReqNo))
        	{
        		alert("법률자문의뢰번호를 검색해주세요.");
        		return false;
        	}
        	if (this.gfn_IsNull(legaladvRepTit))
        	{
        		alert("회신제목을 입력해주세요.");
        		return false;
        	}
        	if (this.gfn_IsNull(legaladvRepCont))
        	{
        		alert("회신내용을 입력해주세요.");
        		return false;
        	}
        	
        	for(var i=0; i<this.ds_cost.rowcount; i++){
        		var cost = this.ds_cost.getColumn(i,"legaladvCostReqCost");
        		var stax = this.ds_cost.getColumn(i,"legaladvCostStax");
        		var cont = this.ds_cost.getColumn(i,"legaladvCostRepCont");
        		
        		if (this.gfn_IsNull(cost))
        		{
        			alert("자문수수료를 입력해주세요.");
        			return false;
        		}
        		if (this.gfn_IsNull(stax))
        		{
        			alert("부가세를 입력해주세요.");
        			return false;
        		}
        		if (this.gfn_IsNull(cont))
        		{
        			alert("자문비 회신내용을 입력해주세요.");
        			return false;
        		}
        	}	
        	
        	return true;
        };

        // 법률자문회신 저장
        this.save_legal = function(Svcid){
        	var strSvcid = Svcid;
        	var strController = "legal_ad/saveLegalAdRep.do";
        	var strParam = "";
        			
        	this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_legal_ad:U"
        					,""
        					,strParam
        					,"fnCallback");
        }

        
        //자문비 저장
        //법률자문 회신을 저장할 때 같이 저장됨
        this.save_cost = function(Svcid){
        		var strSvcid = Svcid;
        		var strController = "legal_ad/saveCost.do";
        		var strParam = "";
        		
        		this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_cost:U"
        					,""
        					,strParam
        					,"fnCallback");
        }

        //자문비 추가/삭제의 경우 화면단에서는 추가/삭제 상태만 보여지고, 저장버튼을 눌렀을 때 법률자문과 같이 저장됨
        //자문비 추가 
        this.btn_cost_add_onclick = function(obj,e)
        {
        	this.ds_cost.insertRow(0);
        	this.ds_cost.setColumn(this.ds_cost.rowposition, "legaladvCostLawadvReqno", this.edt_req_no.value);
        	this.ds_cost.setColumn(this.ds_cost.rowposition, "legaladvCostReqCost", 0);
        	this.ds_cost.setColumn(this.ds_cost.rowposition, "legaladvCostStax", 0);
        	this.ds_cost.setColumn(this.ds_cost.rowposition, "legaladvCostClamsumChg",0);
        }

        //자문비 삭제
        this.btn_cost_del_onclick = function(obj,e)
        {
        	var cRow = this.ds_cost.rowposition;
        	
        	if(this.ds_cost.rowcount==0)
        	{
        		alert("삭제할 데이터가 없습니다.");
        		return;
        	}
        	
        	var rType = this.ds_cost.getRowType(cRow);
        	if(rType == Dataset.ROWTYPE_INSERT)
        	{
        		this.ds_cost.deleteRow(cRow);
        	}
        	else
        	{
        		this.ds_cost.deleteRow(cRow);
        		this.save_cost("delCost");
        	}
        }

        /*
        //의뢰정보버튼
        this.btn_reply_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	//gds에 파라미터값 저장
        	if(!this.gfn_IsNull(this.edt_req_no.value)){
        	
        		var v_paramArr = new Array();
        		v_paramArr[0] = this.edt_req_no.value;
        		
        		//this.gfn_setMainParams(v_paramArr);
        		
        		application.gds_Params.clearData();		// 기존의 자료를 지운다

        		if (!this.gfn_IsNull(v_paramArr))
        		{
        			for(var ii=0; ii<v_paramArr.length; ii++)
        			{
        				application.gds_Params.addRow();
        				application.gds_Params.setColumn(ii, "PARAM_ID", 	ii);
        				application.gds_Params.setColumn(ii, "PARAM_VAL", 	v_paramArr[ii]);
        			}
        		}
        			
        		//탭 삭제
        		for(var i=0; i<application.gds_openMenu.getRowCount(); i++)
        		{	
        			if(application.gds_openMenu.getColumn(i,"WIN_ID").slice(3,7) == "1043"){  //메뉴번호 체크
        				var winId = application.gds_openMenu.getColumn(i,"WIN_ID");
        				break;
        			}
        		}
        		
        		var curTab = Iject.$["mdiFrame"].form.fn_getCurTab();
        		Iject.$["mdiFrame"].form.isActiveFrame(curTab);
        		Iject.$["mdiFrame"].form.fn_TabOnClose(winId);		
        		Iject.$["mdiFrame"].form.bClose = true;	
        		
        		
        		var oObj = {
                  ds    : application.gds_menu,   // 메뉴 dataset 
                  nRow  : "16",          // 선택된 
                  oArgs : []              //넘길 argument
        		};
        		
        		Iject.Mdi.call(this,oObj);
        	}
        	else{
        		alert("법률자문의뢰번호를 검색해주세요.");
        	}
        }*/

        this.edt_rep_tit_ontextchanged = function(obj,e)
        {
        	var strLength = this.edt_rep_tit_nosize.getLength();
        	strLength += " / 100 ";
        	this.Div06.set_text(strLength);
        }

        this.txt_rep_cont_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_rep_cont.getLength();
        	strLength += " / 255 ";
        	this.Div07.set_text(strLength);
        }

        this.txt_rep_poin_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_rep_poin.getLength();
        	strLength += " / 255 ";
        	this.Div08.set_text(strLength);
        }

        this.grd_cost_onheadclick = function(obj,e)
        {
        	this.gfnGridHeadSort(obj, e.cell, false);
        }

        this.fnMoveScreen = function ()
        {
        	var legaladvNo = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	var outReqWtr = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvOutReqWtr");
        	
        	var aArgs =	{
        					legaladvLawAdvReqNo:legaladvNo
        				,	legaladvOutReqWtr:outReqWtr
        				}
        	
        	return this.gfnOpenMenu("legal_ad::legal_ad_mandate", aArgs, this);
        };

        this.cb_out_req_wtr_oncloseup = function(obj,e)
        {
        	if(obj.value=='N')	return;
        	this.fnSearch();
        }

        this.fnSearch = function ()
        {
        	var strSvcid 		= "selectNext";
        	var strController 	= "legal_ad/selectLegalAdDetail.do";
        	var strParam 		=  "legaladvLawAdvReqNo="+this.g_repNo;

        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"",  
        					"ds_legal_ad=ds_output",
        					strParam, 
        					"fnCallback"
        					);
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_legal_ad.addEventHandler("onvaluechanged", this.ds_legal_ad_onvaluechanged, this);
            this.addEventHandler("onload", this.legal_ad_up_onload, this);
            this.img_view03.addEventHandler("onclick", this.img_view00_onclick, this);
            this.img_view01.addEventHandler("onclick", this.img_view01_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_no.addEventHandler("oneditclick", this.edt_req_no_oneditclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.subTitle_01.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no03.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no04.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no05.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_mgr.addEventHandler("oneditclick", this.edt_req_mgr_oneditclick, this);
            this.cb_out_req_wtr.addEventHandler("oncloseup", this.cb_out_req_wtr_oncloseup, this);
            this.subTitle_02.addEventHandler("onclick", this.sta_03_onclick, this);
            this.img_view00.addEventHandler("onclick", this.img_view00_onclick, this);
            this.subTitle_03.addEventHandler("onclick", this.sta_03_onclick, this);
            this.grd_cost.addEventHandler("onheadclick", this.grd_cost_onheadclick, this);
            this.sta_no06.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no07.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no08.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no09.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no10.addEventHandler("onclick", this.sta_no_onclick, this);
            this.wSta_no11.addEventHandler("onclick", this.sta_no_onclick, this);
            this.wSta_no12.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_rep_mgr.addEventHandler("oneditclick", this.edt_req_mgr_oneditclick, this);
            this.cal_rep_date.addEventHandler("oneditclick", this.cal_rep_date_oneditclick, this);
            this.edt_rep_tit_nosize.addEventHandler("ontextchanged", this.edt_rep_tit_ontextchanged, this);
            this.edt_rep_tit_nosize.addEventHandler("oneditclick", this.edt_rep_tit_oneditclick, this);
            this.txt_rep_cont.addEventHandler("ontextchanged", this.txt_rep_cont_ontextchanged, this);
            this.txt_rep_poin.addEventHandler("ontextchanged", this.txt_rep_poin_ontextchanged, this);
            this.btn_cost_del.addEventHandler("onclick", this.btn_cost_del_onclick, this);
            this.btn_cost_add.addEventHandler("onclick", this.btn_cost_add_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("legal_ad_up.xfdl");

       
    };
}
)();
