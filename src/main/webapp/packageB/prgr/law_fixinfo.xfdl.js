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
                this.set_name("LAW_FIXINFO");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_font("9 굴림체");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fixinfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoNum\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoPlc\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoMainIssu\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoCpInsi\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoOthInsi\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoCortOpin\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoLyrOpin\" type=\"STRING\" size=\"256\"/><Column id=\"lawFixinfoDlinDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_def_code", this);
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

            obj = new Dataset("ds_case_ty_code", this);
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

            obj = new Dataset("ds_fixinfo_sepcode", this);
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

            obj = new Dataset("ds_cort_code", this);
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

            obj = new Dataset("ds_inst_adm_code", this);
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

            obj = new Dataset("ds_time_type", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">1</Col><Col id=\"codenm\">오전</Col></Row><Row><Col id=\"codeno\">2</Col><Col id=\"codenm\">오후</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prgr_code", this);
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

            obj = new Dataset("ds_instance", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPetiSenddate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortReqidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcdate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcopin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCpOpin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVopcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVop\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmDivRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtrmgrDepuname\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRaisreqDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCfmDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDelidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRegnChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPayDlindate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmWincRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCont\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inst_adm_code00", this);
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


            
            // UI Components Initialize
            obj = new ImageViewer("img_view03", "absolute", "14", "256", "996", "191", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_09", "absolute", "17", "239", "197", "19", null, null, this);
            obj.set_taborder("46");
            obj.set_text("기일정보");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  기일정보관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0", "absolute", "20", "261", "984", "181", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_fixinfo");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_autofittype("col");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"221\"/><Column size=\"100\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 arial;\" text=\"No\"/><Cell col=\"1\" style=\"font:9 arial;\" text=\"기일구분\"/><Cell col=\"2\" style=\"font:9 arial;\" text=\"기일장소\"/><Cell col=\"3\" style=\"font:9 arial;\" text=\"기일일시\"/><Cell col=\"4\" style=\"font:9 arial;\" text=\"기일마감일시\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:lawFixinfoSepcode\" combodataset=\"ds_fixinfo_sepcode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:lawFixinfoPlc\" editdisplay=\"edit\" calendardisplay=\"edit\" calendardisplaynulltext=\" \"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:lawFixinfoDate\" expr=\"expr:comp.parent.gfn_IsNull(lawFixinfoDate) ? &quot;&quot; : (lawFixinfoDate.substr(0,4)+&quot;-&quot;+lawFixinfoDate.substr(4,2)+&quot;-&quot;+lawFixinfoDate.substr(6,2)+&quot; &quot;+lawFixinfoDate.substr(8,2)+&quot;:&quot;+lawFixinfoDate.substr(10,2))\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:lawFixinfoDlinDate\" expr=\"expr:comp.parent.gfn_IsNull(lawFixinfoDlinDate) ? &quot;&quot; : (lawFixinfoDlinDate.substr(0,4)+&quot;-&quot;+lawFixinfoDlinDate.substr(4,2)+&quot;-&quot;+lawFixinfoDlinDate.substr(6,2)+&quot; &quot;+lawFixinfoDlinDate.substr(8,2)+&quot;:&quot;+lawFixinfoDlinDate.substr(10,2))\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "23", "70", "982", "25", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_depo_search", "absolute", "289", "71", "55", "23", null, null, this);
            obj.set_taborder("20");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("21");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("notice", "absolute", "716", "74", "197", "17", null, null, this);
            obj.set_taborder("22");
            obj.set_text("아직 승인되지 않은 소송입니다.");
            obj.style.set_color("red");
            obj.style.set_font("dotum,9,bold");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No", "absolute", "141", "73", "140", "19", null, null, this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "351", "70", "115", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_instance", "absolute", "471", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_inst_adm_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_index("-1");

            obj = new Static("subTitle_03", "absolute", "16", "115", "197", "19", null, null, this);
            obj.set_taborder("31");
            obj.set_text("심급기본사항");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "54", "137", "950", "25", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "132", "996", "84", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "54", "161", "950", "25", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "54", "185", "950", "25", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "54", "137", "950", "25", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "137", "115", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "161", "115", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "20", "185", "115", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "351", "137", "115", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "351", "161", "115", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("피고");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "674", "137", "115", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_25", "absolute", "674", "161", "115", "25", null, null, this);
            obj.set_taborder("43");
            obj.set_text("청구소가");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_1", "absolute", "140", "188", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("@ds_cort_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("cb_2", "absolute", "471", "140", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@ds_case_ty_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_02", "absolute", "471", "164", "140", "19", null, null, this);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_03", "absolute", "794", "140", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("@ds_prgr_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new MaskEdit("edt_MaskEdit00", "absolute", "794", "164", "140", "19", null, null, this);
            obj.set_taborder("30");
            obj.set_mask("#,###");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01", "absolute", "140", "140", "140", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_0", "absolute", "140", "164", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("@ds_def_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Button("btn_new", "absolute", "893", "229", "55", "23", null, null, this);
            obj.set_taborder("47");
            obj.set_text("신규");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "953", "229", "55", "23", null, null, this);
            obj.set_taborder("48");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "949", "676", "55", "23", null, null, this);
            obj.set_taborder("73");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "889", "676", "55", "23", null, null, this);
            obj.set_taborder("74");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "467", null, "200", "0", null, this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("img_view02", "absolute", "14", "16", "996", "179", null, null, this.Div02);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_12", "absolute", "54", "130", "950", "60", null, null, this.Div02);
            obj.set_taborder("1");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_13", "absolute", "20", "130", "105", "60", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("재판부의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_10", "absolute", "54", "23", "567", "25", null, null, this.Div02);
            obj.set_taborder("3");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_15", "absolute", "20", "23", "105", "25", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("기일구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_14", "absolute", "287", "23", "105", "25", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("기일장소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_16", "absolute", "54", "47", "567", "25", null, null, this.Div02);
            obj.set_taborder("6");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_11", "absolute", "20", "47", "105", "25", null, null, this.Div02);
            obj.set_taborder("7");
            obj.set_text("기일일시");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_20", "absolute", "54", "71", "950", "60", null, null, this.Div02);
            obj.set_taborder("8");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_17", "absolute", "20", "71", "105", "60", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_text("상대방주장");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo04", "absolute", "130", "26", "130", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@ds_fixinfo_sepcode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Static("sta_21", "absolute", "287", "47", "105", "25", null, null, this.Div02);
            obj.set_taborder("11");
            obj.set_text("기일마감일시");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_22", "absolute", "616", "23", "388", "50", null, null, this.Div02);
            obj.set_taborder("12");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_23", "absolute", "560", "72", "113", "60", null, null, this.Div02);
            obj.set_taborder("13");
            obj.set_text("당사자주장");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit5", "absolute", "398", "26", "130", "19", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_maxlength("125");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_24", "absolute", "560", "23", "113", "50", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_text("주요쟁점사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 굴림");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("sta_26", "absolute", "560", "130", "113", "60", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("외부변호사의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "130", "50", "130", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_type("normal");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("null");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Calendar("Calendar01", "absolute", "398", "50", "130", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new TextArea("ta_Oth_Insi", "absolute", "131", "74", "424", "53", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.set_maxlength("125");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("ta_Cort_Opin", "absolute", "131", "133", "424", "53", null, null, this.Div02);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.set_maxlength("125");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("ta_Lyr_Opin", "absolute", "678", "133", "320", "52", null, null, this.Div02);
            obj.set_taborder("21");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_enable("false");
            obj.set_scrollbars("autoboth");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("ta_Main_Issu", "absolute", "678", "26", "320", "44", null, null, this.Div02);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.set_maxlength("1000");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("ta_Cp_Insi", "absolute", "678", "75", "320", "52", null, null, this.Div02);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_align("left middle");
            obj.set_maxlength("125");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static04", "absolute", "35", "24", "37", "23", null, null, this.Div02);
            obj.set_taborder("24");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static00", "absolute", "35", "48", "37", "23", null, null, this.Div02);
            obj.set_taborder("25");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static01", "absolute", "30", "90", "37", "23", null, null, this.Div02);
            obj.set_taborder("26");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static02", "absolute", "29", "149", "37", "23", null, null, this.Div02);
            obj.set_taborder("27");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static03", "absolute", "567", "37", "37", "23", null, null, this.Div02);
            obj.set_taborder("28");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static05", "absolute", "573", "91", "37", "23", null, null, this.Div02);
            obj.set_taborder("29");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static06", "absolute", "303", "24", "37", "23", null, null, this.Div02);
            obj.set_taborder("30");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("star_Static07", "absolute", "290", "48", "37", "23", null, null, this.Div02);
            obj.set_taborder("31");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("subTitle_00", "absolute", "16", "466", "197", "19", null, null, this);
            obj.set_taborder("77");
            obj.set_text("기일상세정보");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1011, 49, this.DivTitle,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  기일정보관리");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 dotum");

            	}
            );
            this.DivTitle.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 982, 25, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_background("#f0f0f0ff");
            		p.style.set_border("1 solid #a8a8a8ff");
            		p.set_visible("true");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 200, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("75");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","edt_No","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_01","value","ds_instance","instAdmCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cb_0","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cb_1","value","ds_instance","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cb_2","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_02","value","ds_lawsuit","pladefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cb_03","value","ds_instance","instAdmPrgrCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_MaskEdit00","value","ds_instance","instAdmClamVop");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div02.Combo04","value","ds_fixinfo","lawFixinfoSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div02.Edit5","value","ds_fixinfo","lawFixinfoPlc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div02.Calendar00","value","ds_fixinfo","lawFixinfoDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div02.Calendar01","value","ds_fixinfo","lawFixinfoDlinDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div02.ta_Oth_Insi","value","ds_fixinfo","lawFixinfoOthInsi");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div02.ta_Cort_Opin","value","ds_fixinfo","lawFixinfoCortOpin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div02.ta_Lyr_Opin","value","ds_fixinfo","lawFixinfoLyrOpin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div02.ta_Main_Issu","value","ds_fixinfo","lawFixinfoMainIssu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div02.ta_Cp_Insi","value","ds_fixinfo","lawFixinfoCpInsi");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("law_fixinfo.xfdl", "Lib::common.xjs");
        this.registerScript("law_fixinfo.xfdl", function() {
        //include "Lib::common.xjs";

        var gbcode = ""; //insert, delete, update 저장메시지 호출용
        var	lawsrcrlt = "";		//소송관리번호
        var instcdrlt = "";		//심급코드

        //OnLoadComplete
        this.OUT_FIXINFO_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	this.gf_codeComListLoad("dsComCode1", "ds_case_ty_code", "N", "", "", "fn_callback", "A02");
        	this.gf_codeComListLoad("dsComCode2", "ds_def_code", "N", "", "", "fn_callback", "H02");
        	this.gf_codeComListLoad("dsComCode3", "ds_cort_code", "N", "", "", "fn_callback", "A01");
        	this.gf_codeComListLoad("dsComCode4", "ds_fixinfo_sepcode", "N", "", "", "fn_callback", "K01");
        	this.gf_codeComListLoad("dsComCode5", "ds_inst_adm_code", "N", "", "", "fn_callback", "G01");
        	this.gf_codeComListLoad("dsComCode6", "ds_prgr_code", "N", "", "", "fn_callback", "G02");
        	
        	//this.gf_codeComListLoad(strSvcId, strDataSet, strAllYn, strAllCode, strAllName, strCallbackFunc, strVParam,isSync)
        }

        //소송관리번호검색버튼
        this.Div01_Button0_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	var newChild = new ChildFrame;
        	
        	//모달팝업창 불러옴
        	newChild.init("Popup1", "absolute", nLeft, nTop, 300, 250, null, null,
        					"lawsuit::LAWSUIT_ADM_NO.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame(),"",this,"modal_callback");
        }

        //modal_callback 함수
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Popup1")
        	{
        		var lawSearchNo = variant; //variant : modal창 닫힐때의 반환값
        		
        		this.cb_instance.set_enable(true);
        		
        		if(this.gfn_IsNull(lawSearchNo) || lawSearchNo==0) //소송관리번호가 빈값인 경우
        		{
        			lawsrcrlt='';
        			instcdrlt = '';
        			return false;
        		}
        		else
        		{
        			lawsrcrlt = lawSearchNo.substr(0,10);
        			
        			if(lawSearchNo.length == 13)	instcdrlt = lawSearchNo.substr(10,3);
        			else							instcdrlt = '';
        			
        			this.ds_lawsuit.filter('');
        			this.ds_instance.filter('');
        			this.ds_fixinfo.filter('');
        			
        			this.ds_lawsuit.clearData();
        			this.ds_instance.clearData();
        			this.ds_fixinfo.clearData();
        			
        			this.ds_lawsuit.addRow();
        			this.ds_instance.addRow();
        			this.ds_fixinfo.addRow();
        			
        			this.fnSetLawsuitAdmNo(lawsrcrlt, instcdrlt);
        			
        			
        			//this.cb_instance.set_index(0);
        			
        		}
        	}//end Popup1
        }

        this.fnSetLawsuitAdmNo = function (lawsrcrlt,instcdrlt)
        {
        	if(lawsrcrlt.length>0){
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsrcrlt);
        		this.ds_search.setColumn(0, "instAdmCode", instcdrlt);
        		
        		this.fnGetLawsuitInfo();
        	}
        };

        this.fnGetLawsuitInfo = function ()
        {	
        	var strSvcid = "getLawsuitRecSelect";
        	var strController = "/out/fixinfo_getLawsuitRecSelect.do";
        	
        	this.gfn_transaction(this, 						//호출한 Frame
        						strSvcid, strController, 
        						"ds_search=ds_search", 		//input : transaction을 요청할 때 입력값으로 보낼 Dataset의 ID 리스트
        						"ds_lawsuit=ds_output", 	//ouput: transaction을 처리 결과를 받을 Dataset의 ID 리스트
        						"",							//transaction을 요청할 때 입력값으로 보낼 변수
        						"fn_callback");
        };

        this.fnGetInstanceList = function ()
        {
        	var strSvcid = "getInstanceList";
        	var strController = "/out/getInstanceList.do";
        	
        	this.gfn_transaction(this, 						//호출한 Frame
        						strSvcid, strController, 
        						"ds_search=ds_search", 		//input : transaction을 요청할 때 입력값으로 보낼 Dataset의 ID 리스트
        						"ds_instance=ds_output", 	//ouput: transaction을 처리 결과를 받을 Dataset의 ID 리스트
        						"",							//transaction을 요청할 때 입력값으로 보낼 변수
        						"fn_callback");
        };

        this.fnGetLawFixinfoList = function (lawsrcrlt)
        {
        	var strSvcid = "getLawFixinfoSelect";
        	var strController = "/out/fixinfo_getLawFixinfoSelect.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search",
        						"ds_fixinfo=ds_output",
        						"",
        						"fn_callback");
        };

        //심급변경에 따른 기일정보 변경
        this.combo_Instance_onitemchanged = function(obj,e)
        {
        	this.ds_fixinfo.filter("instAdmCode=='"+obj.value+"'");
        	this.ds_instance.filter("instAdmCode=='"+obj.value+"'");
        	
        	this.ds_fixinfo.set_rowposition(-1);
        	this.ds_instance.set_rowposition(0);
        }

        //callback 함수
        this.fn_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		if(sSvcId=="insertFixinfo")	return alert("저장에 실패하였습니다." + sErrorMsg);
        		else						return alert("데이터 불러오기에 실패하였습니다." + sErrorMsg);
        	}
        	switch(sSvcId)
        	{		
        		case "dsComCode5":
        				this.ds_inst_adm_code00.copyData(this.ds_inst_adm_code);
        			break;
        		case "getLawFixinfoSelect":
        				this.cb_instance.set_value(instcdrlt);
        				this.combo_Instance_onitemchanged(this.cb_instance,{});	
        			break;
        			
        		case "getInstanceList":
        				this.ds_inst_adm_code.copyData(this.ds_inst_adm_code00);
        				this.notice.set_visible(false);
        				
        				if(this.ds_instance.getRowCount() ==0)
        				{						
        					
        					for(var i=10; i>0 ; i--){
        						this.ds_inst_adm_code.deleteRow(i);
        					}		
        										
        					//this.cb_instance.set_index(0);
        					this.btn_new.set_visible(false);
        					this.btn_del.set_visible(false);					
        					this.notice.set_visible(true);				
        				}
        				else
        				{
        					
        					var instanceLevel = this.ds_instance.getRowCount() - 1;
        					for(var i=10; i>instanceLevel ; i--){
        						this.ds_inst_adm_code.deleteRow(i);
        					}					
        					this.btn_new.set_visible(true);
        					this.btn_del.set_visible(true);	
        				}	
        				
        				this.cb_instance.set_index(parseInt(instcdrlt)-1);
        				this.fnGetLawFixinfoList();			
        			break;
        			
        		case "getLawsuitRecSelect": //기본사항조회
        				if(this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition, "lawsuitCpPladefSepcode") != "001")
        				{
        					this.sta_08.set_text("원고");
        				}
        				else
        				{
        					this.sta_08.set_text("피고");
        				}
        				//trace(this.ds_lawsuit.saveXML());
        				this.fnGetInstanceList();
        			break;
        		
        		case "deleteFixinfo":
        			if(this.ds_fixinfo.rowcount !=0)
        			{
        				this.alert("삭제완료");
        				this.ds_fixinfo.rowposition = 0;
        			}
        			else
        			{
        				this.ds_fixinfo.rowposition = 0;
        			}
        			break;
        			
        		case "insertFixinfo":
        			alert("처리되었습니다.");
        			
        			this.modal_callback("Popup1", this.edt_No.text + "" + this.cb_instance.value);
        			//this.fnGetLawFixinfoList();		
        			
        			/*
        			if(this.ds_instance2.rowcount != 0)
        			{
        				alert("처리되었습니다.");
        				this.ds_instance2.rowposition = 0;
        			}
        			else
        			{
        				this.ds_instance2.rowposition = 0;
        			}
        			*/
        			break;
        	}
        }

        
        //기일정보 신규 버튼 event
        this.btn_new_onclick = function(obj,e)
        {
        	if(this.ds_lawsuit.getColumn(0, "lawsuitAdmNo") == null){
        		alert("먼저 사건을 조회해주세요.");
        		return;
        	}
        	this.ds_fixinfo.insertRow(0);
        	this.ds_fixinfo.setColumn(0, "lawsuitAdmNo", this.ds_instance.getColumn(this.ds_instance.rowposition,"lawsuitAdmNo"));
        	this.ds_fixinfo.setColumn(0, "instAdmCode", this.ds_instance.getColumn(this.ds_instance.rowposition,"instAdmCode"));
        // 	this.Div02.ta_Cort_Opin.set_enable(true);
        // 	this.Div02.ta_Cp_Insi.set_enable(true);
        // 	this.Div02.ta_Main_Issu.set_enable(true);
        // 	this.Div02.ta_Oth_Insi.set_enable(true);
        	
        	
        // 	this.Div02.Combo04.set_enable(true);
        // 	this.Div02.Calendar00.set_enable(true);
        // 	this.Div02.Calendar00.set_enable(true);
        // 	this.Div02..set_enable(true);
        	
        // 	this.btn_new.set_visible(true);
        // 	this.btn_del.set_visible(true);
        // 	this.Div02.set_visible(true);
        // 	this.Div03.set_visible(false);
        // 	this.btn_save.set_visible(true);
        // 	
        // 	this.Div03.Combo04.set_index(0);
        // 	this.Div03.Edit00.set_value('');
        // 	this.Div03.Edit01.set_value('');
        // 	this.Div03.Calendar00.set_value('');	
        // 	 this.Div03.ta_Oth_Insi.set_value('');
        // 	this.Div03.Edit5.set_value('');
        	
        // 	obj.set_visible(false);
        // 	this.btn_del.set_visible(false);
        // 	this.Div02.set_visible(false);
        // 	this.Div03.set_left(0);
        // 	this.Div03.set_visible(true);
        // 	this.btn_save.set_visible(false);
        	
        	/*
        	var rec = this.confirm("기일정보를 등록하시겠습니까?");
        	
        	if(rec=="1")
        	{
        		this.alert("작성 후 저장 버튼을 꼭 눌러주세요.");
        		gbcode="insert";
        		
        		this.ds_instance2.insertRow(0);
        		//this.ds_instance2.rowposition=-1;
        		this.ds_instance2.rowposition = 0;
        		
        		//소송번호, 심급 가져오기
        		var lawsuitAdmNo = this.ds_instance.getColumn(0,"lawsuitAdmNo");
        		var instAdmCode = this.ds_instance.getColumn(0, "instAdmCode");
        		
        		trace("\\\\\\\\\\소송번호////////////"+this.ds_instance.getColumn(0,"lawsuitAdmNo"));
        		
        		//기일정보 dataset에 소송번호, 심급 data 넣기
        		this.ds_instance2.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_instance2.setColumn(0, "instAdmCode", instAdmCode);
        		trace("++++++++++++소송번호++++++++++"+this.ds_instance2.getColumn(0,"lawsuitAdmNo"));
        		
        		this.div_detail.Edit5.setFocus();
        	}
        	else
        	{
        		gbcode = "";
        		return false;
        	}
        	*/
        }

        
        //기일정보 삭제 버튼 event
        this.btn_del_onclick = function(obj,e)
        {
        	//this.ds_fixinfo.deleteRow(this.ds_fixinfo.rowposition);
        	
        	if(this.ds_fixinfo.getRowCount() < 1)
        	{
        		this.alert("삭제할 정보가 없습니다.");
        	}
        	else if(this.ds_fixinfo.rowposition == -1)
        	{
        		this.alert("내역을 선택해 주세요.");
        		return false;
        	}
        	else
        	{
        		if(this.confirm("삭제 하시겠습니까?"))
        		{
        			this.ds_fixinfo.deleteRow(this.ds_fixinfo.rowposition);
        		}
        		else
        		{
        			return;
        		}
        		//delete 실행
        		this.sav_transaction("deleteFixinfo");
        	}
        	
        }

        
        //기일정보 저장 버튼 event
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.edt_No.value == "")						return	alert("소송관리번호를 검색해주세요.");		
        	else if(!this.gfnDsChangeCheck(this.ds_fixinfo))return	alert("저장할 데이터가 없습니다.");
        	
        	
        	for(var i=0; i<this.ds_fixinfo.rowcount; i++){
        		
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoDate")))	return alert("기일일시가 없습니다.");
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoPlc")))	return alert("기일장소가 없습니다.");
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoDlinDate")))	return alert("기일마감일시가 없습니다.");
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoSepcode")))	return alert("기일구분코드가 없습니다.");	
        			
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoOthInsi")))	return alert("상대방주장이 없습니다.");
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoCortOpin")))	return alert("재판부의견이 없습니다.");
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoMainIssu")))	return alert("주요쟁점사항이 없습니다.");
        		if(this.gfn_IsNull(this.ds_fixinfo.getColumn(i,"lawFixinfoCpInsi")))	return alert("당사자주장이 없습니다.");	
        	}
        	
        	var tmpLawFixinfoDate = this.ds_fixinfo.getColumn(this.ds_fixinfo.rowposition, "lawFixinfoDate");
        	var tmpLawFixinfoDlinDate = this.ds_fixinfo.getColumn(this.ds_fixinfo.rowposition, "lawFixinfoDlinDate");

        	this.ds_fixinfo.setColumn(this.ds_fixinfo.rowposition, "lawFixinfoDate", tmpLawFixinfoDate.substr(0, 12));
        	this.ds_fixinfo.setColumn(this.ds_fixinfo.rowposition, "lawFixinfoDlinDate", tmpLawFixinfoDlinDate.substr(0, 12));

        	this.sav_transaction("insertFixinfo");
        }

        
        //기일정보 저장,수정,삭제 시 공통 transaction method
        this.sav_transaction = function(sSvcid)
        {
        	var strSvcid = sSvcid;
        	var strController = "/out/fixinfo_getLawFixinfoCud2.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_fixinfo:U", //input dataset : nexacro(요청값) -> controller
        						"",
        						//"ds_instans2=ds_output", //output dataset : controller(결과값) -> nexacro 
        						"",
        						"fn_callback");
        }

        //닫기 버튼
        this.Button00_onclick = function(obj,e)
        {
        	this.gfnClose();
        }

        
        this.Div03_btn_cancel_onclick = function(obj,e)
        {
        	
        		this.btn_new.set_visible(true);
        		this.btn_del.set_visible(true);
        		this.Div02.set_visible(true);
        		this.Div03.set_visible(false);
        		this.btn_save.set_visible(true);
        		
        		this.Div03.Combo04.set_index(0);
        		this.Div03.Edit00.set_value('');
        		this.Div03.Edit01.set_value('');
        		this.Div03.Calendar00.set_value('');	
        		//this.Div03.ta_Oth_Insi.set_value('');
        		this.Div03.Edit5.set_value('');
        }

        

        // 가입일시 expr
        // comp.parent.gfn_IsNull(lawFixinfoDate) ? "" : (lawFixinfoDate.substr(0,4)+"-"+lawFixinfoDate.substr(4,2)+"-"+lawFixinfoDate.substr(6,2)+" "+lawFixinfoDate.substr(8,2)+":"+lawFixinfoDate.substr(10,2))
        // expr:comp.parent.gfn_IsNull(lawFixinfoDlinDate) ? "" : (lawFixinfoDlinDate.substr(0,4)+"-"+lawFixinfoDlinDate.substr(4,2)+"-"+lawFixinfoDlinDate.substr(6,2)+" "+lawFixinfoDlinDate.substr(8,2)+":"+lawFixinfoDlinDate.substr(10,2))
        this.Div02_Calendar00_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OUT_FIXINFO_onload, this);
            this.img_view03.addEventHandler("onclick", this.img_view03_onclick, this);
            this.subTitle_09.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_depo_search.addEventHandler("onclick", this.Div01_Button0_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.Div01_btn_clear_onclick, this);
            this.cb_instance.addEventHandler("onitemchanged", this.combo_Instance_onitemchanged, this);
            this.subTitle_03.addEventHandler("onclick", this.sta_03_onclick, this);
            this.cb_1.addEventHandler("onitemchanged", this.Div02_Combo01_onitemchanged, this);
            this.cb_2.addEventHandler("onitemchanged", this.Div02_Combo02_onitemchanged, this);
            this.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_close.addEventHandler("onclick", this.Button00_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div02.Calendar00.addEventHandler("oneditclick", this.Div02_Calendar00_oneditclick, this);
            this.Div02.ta_Cp_Insi.addEventHandler("oneditclick", this.div_detail_ta_Cp_Insi_oneditclick, this);
            this.subTitle_00.addEventHandler("onclick", this.sta_03_onclick, this);

        };

        this.loadIncludeScript("law_fixinfo.xfdl");

       
    };
}
)();
