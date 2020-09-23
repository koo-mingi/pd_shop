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
                this.set_name("LAWSUIT_NOTI");
                this.set_titletext("소송고지관리");
                this._setFormPosition(0,0,800,600);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_instanceType", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitNoti", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitNotiAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiInstSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDfsDeg\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDfsDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "8", "4", null, "32", "6", null, this);
            obj.set_taborder("16");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_searchBg");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("st_searchCondition", "absolute", "20", "-4", "84", "41", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("소송고지번호");
            obj.set_cssclass("sta_WF_schTitle");
            obj.getSetter("domainId").set("nexa.s_condition");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_adm_no", "absolute", "13.01%", "5", null, "20", "54.34%", null, this.div_search);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_list_search", "absolute", null, "3", "58", "25", "46.3%", null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_clear", "absolute", "91.2%", "4", null, "23", "1.91%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "0", "31", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "32", null, "31", "79.88%", null, this);
            obj.set_taborder("23");
            obj.set_text("소송 고지 기본사항");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "94%", "570", null, "21", "1.5%", null, this);
            obj.set_taborder("45");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "1%", "214", null, "35", "84.38%", null, this);
            obj.set_taborder("46");
            obj.set_text("소송 고지 내용");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "1%", "60", null, "158", "0.75%", null, this);
            obj.set_taborder("52");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.15%", "7", null, "28", "90.43%", null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("고지일자");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "33.93%", "7", null, "28", "54.59%", null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("심급구분");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "71.3%", "7", null, "28", "20.03%", null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("계류법원");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("combo_search_instanceType", "absolute", "46.43%", "11", null, "21", "37.5%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_instanceType");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeFull");
            obj = new Calendar("cal_date", "absolute", "11.22%", "10", null, "21", "72.58%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj = new Combo("combo_search_court", "absolute", "81.51%", "10", null, "21", "2.42%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codeFull");
            obj = new Static("Static03", "absolute", "1.15%", "41", null, "28", "90.43%", null, this.Div00);
            obj.set_taborder("15");
            obj.set_text("사건번호");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_case_no", "absolute", "11.22%", "46", null, "21", "72.83%", null, this.Div00);
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_case1", "absolute", "28.44%", "45", null, "21", "66.96%", null, this.Div00);
            obj.set_taborder("17");
            obj.set_text("입력");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "33.8%", "43", null, "28", "54.59%", null, this.Div00);
            obj.set_taborder("18");
            obj.set_text("변론차수");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_dfs_deg", "absolute", "46.43%", "46", null, "21", "37.5%", null, this.Div00);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "63.9%", "42", null, "28", "30.48%", null, this.Div00);
            obj.set_taborder("20");
            obj.set_text("(차)");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "71.3%", "41", null, "28", "20.03%", null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("변론기일");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("cal_dfs_date", "absolute", "81.51%", "43", null, "21", "2.68%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj = new Static("Static07", "absolute", "1.28%", "83", null, "28", "90.31%", null, this.Div00);
            obj.set_taborder("23");
            obj.set_text("원고");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "1.28%", "117", null, "28", "90.31%", null, this.Div00);
            obj.set_taborder("24");
            obj.set_text("피고");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_pla_name", "absolute", "11.1%", "87", null, "21", "72.7%", null, this.Div00);
            obj.set_taborder("25");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_def_name", "absolute", "11.1%", "118", null, "21", "72.7%", null, this.Div00);
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "33.93%", "83", null, "28", "54.59%", null, this.Div00);
            obj.set_taborder("27");
            obj.set_text("외 인원수(명)");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "33.93%", "117", null, "28", "54.59%", null, this.Div00);
            obj.set_taborder("28");
            obj.set_text("외 인원수(명)");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_pla_etc_no", "absolute", "46.43%", "87", null, "21", "37.37%", null, this.Div00);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_def_etc_no", "absolute", "46.43%", "118", null, "21", "37.37%", null, this.Div00);
            obj.set_taborder("30");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "63.78%", "84", null, "28", "30.61%", null, this.Div00);
            obj.set_taborder("31");
            obj.set_text("(명)");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "63.78%", "115", null, "28", "30.61%", null, this.Div00);
            obj.set_taborder("32");
            obj.set_text("(명)");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0%", "5", null, "33", "96.56%", null, this.Div00);
            obj.set_taborder("33");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0%", "39", null, "33", "96.56%", null, this.Div00);
            obj.set_taborder("34");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0%", "80", null, "33", "96.56%", null, this.Div00);
            obj.set_taborder("35");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0%", "114", null, "33", "96.56%", null, this.Div00);
            obj.set_taborder("36");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "32.65%", "5", null, "33", "63.9%", null, this.Div00);
            obj.set_taborder("37");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "32.53%", "40", null, "33", "64.03%", null, this.Div00);
            obj.set_taborder("38");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "70.03%", "39", null, "33", "26.53%", null, this.Div00);
            obj.set_taborder("39");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "70.03%", "5", null, "33", "26.53%", null, this.Div00);
            obj.set_taborder("40");
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("center");
            obj.style.set_font("9 Dotum Bold");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "80%", "569", null, "21", "15.5%", null, this);
            obj.set_taborder("53");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "1%", "245", null, "316", "0.75%", null, this);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "1.02%", "9", null, "295", "91.2%", null, this.Div05);
            obj.set_taborder("17");
            obj.set_text("고지내용");
            obj.style.set_background("lavender left middle");
            obj.style.set_align("center");
            this.Div05.addChild(obj.name, obj);
            obj = new TextArea("text_cont", "absolute", "9.69%", "9", null, "295", "1.15%", null, this.Div05);
            obj.set_taborder("18");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "87%", "569", null, "21", "8.5%", null, this);
            obj.set_taborder("55");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 32, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_searchBg");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 31, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("23");
            		p.set_text("소송 고지 기본사항");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 158, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 316, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송고지관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Div00.combo_search_instanceType","value","ds_lawsuitNoti","lawsuitNotiInstSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_search.edt_adm_no","value","ds_lawsuitNoti","lawsuitNotiAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div00.cal_date","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.combo_search_court","value","ds_lawsuitNoti","lawsuitNotiCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.cal_dfs_date","value","ds_lawsuitNoti","lawsuitNotiDfsDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.edt_case_no","value","ds_lawsuitNoti","lawsuitNotiCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.edt_dfs_deg","value","ds_lawsuitNoti","lawsuitNotiDfsDeg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.edt_pla_name","value","ds_lawsuitNoti","lawsuitNotiPlaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.edt_pla_etc_no","value","ds_lawsuitNoti","lawsuitNotiPlaEtcNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.edt_def_name","value","ds_lawsuitNoti","lawsuitNotiDefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.edt_def_etc_no","value","ds_lawsuitNoti","lawsuitNotiDefEtcNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.text_cont","value","ds_lawsuitNoti","lawsuitNotiCont");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_NOTI_copy_org.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_NOTI_copy_org.xfdl", function() {
        //include "Lib::common.xjs";

        
        // 초기화면
        // 페이지 로딩시 이벤트
        this.LAWSUIT_NOTI_onload = function(obj,e){
        	// 새로운 Row 추가
        	this.ds_lawsuitNoti.addRow();
        	// 데이터셋 초기화
        	this.ds_court.clearData();
        	this.ds_instanceType.clearData();
        	
        	this.gf_codeComListLoad("dsComCode", "ds_instanceType", "Y", "", "", "", "G01"); // 심급차수코드
        	this.gf_codeComListLoad("dsComCode", "ds_court", "Y", "", "", "", "A01"); // 법원 공통 코드
        }

        // 심급에 따른 차수 셋팅
        this.setInstanceLevel = function(){
        	if(this.ds_lawsuitNoti.rowcount==0){
        		
        		for(var i=10; i>0 ; i--){
        			this.ds_instanceType.DeleteRow(i);
        		}		
        			this.Div00.combo_search_instanceType.index="0";
        }else{
        		var instanceLevel = this.ds_lawsuitNoti.rowcount-1;
        		for(var i=10; i>instanceLevel ; i--){
        			this.ds_instanceType.DeleteRow(i);
        		}		
        			this.Div00.combo_search_instanceType.index=instanceLevel;
        	}	
        }

        // 소송고지 번호 검색 팝업창
        this.btn_list_search_OnClick = function(){
        		
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_NOTI_NO.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	
        	// 팝업에서 가져온 값을 해당되는 위치에 대입 (단 조건값은 팝업에 위치한 배열값과 일치해야)
        	
        	if(!this.gfn_IsNull(v_rtnArr))
        	{
        		this.getLawsuitNotiList(v_rtnArr[0]);
        	}

        }
        /*
        // 사건번호 검색
        this.btn_case1_OnClick = function(){
        	var v_argParm = new Array(); // 배열선언
            v_argParm[0] = '';
        	//	팝업화면 
        		
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("lawraisreqs"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::POP_CASENO_SEARCH.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	
        	// 팝업에서 가져온 값을 해당되는 위치에 대입 (단 조건값은 팝업에 위치한 배열값과 일치해야)
        	if(!this.gfn_IsNull(v_rtnArr))
        	{
        		this.getLawsuitNotiList(v_rtnArr[0]);
        	}
        }
        */
        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {

        	if(strID == "Popup1")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		
        		if(this.ds_lawsuitNoti.getRowCount > 0) {
        			this.ds_lawsuitNoti.clearData();
        		}
        		
        		this.getLawsuitNotiList(variant);
        	}

        }

        // 소송고지 내용 가져오기
        this.getLawsuitNotiList = function(variant)
        {
        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	this.ds_search.setColumn(0, "searchKeyword", variant);
        	var strSvcid 		= "getLawsuitNotiList";
        	var strController	= "noti/getLawsuitNotiList.do";
        	var strParam 		= "";

        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        				strSvcid,
        				strController, 
        				"ds_search=ds_search", 
        				"ds_lawsuitNoti=ds_output",
        				strParam, 
        				"fnCallBack"
        				);

        }

        this.fnCallBack = function(sSvcId,nErrorCode,sErrorMsg)
        {

        	if (nErrorCode < 0)
        	{		
        		alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	switch (sSvcId)
        	{
        		case "getLawsuitNotiList":		// 조회
        			if(nErrorCode < 0 ){
        				this.alert("소송고지 불러오기 실패하였습니다."+sErrorMsg);
        			}else if(nErrorCode == 0 ){
        				//this.alert("처리되었습니다.");
        				break;
        			}
        		case "insertLawsuitNoti":		// 저장
        			this.alert("저장되었습니다.");
        			break;
        			
        		case "getRaisreqDefList":
        			// trace(this.ds_def.saveXML());
        			break;
        		
        		case "insertDefAll":
        			trace(this.ds_raisreq.saveXML());
        			this.alert("저장되었습니다.");
        			break;
        		case "updateRaisreqRep":
        			this.alert("저장되었습니다.");
        			break;
        	}
        }

        
        this.btn_Clean_OnClick = function(obj,e)
        {
        	this.ds_instanceType.clearData();
        	this.ds_court.clearData();
        	this.ds_lawsuitNoti.clearData();
        	this.reload();
        }

        
        this.btn_save_OnClick = function(obj,e)
        {
        	
        	if(this.Div00.cal_date.value='')
        	{
        		this.alert("고지일자를 선택하세요.");
        		this.Div00.cal_date.setFocus();
        		this.Div00.cal_date.dropdown();
        	
        	}else if(this.Div00.combo_search_instanceType.index==-1){
        		this.alert("심급을 선택해주세요.");
        		this.Div00.combo_search_instanceType.setFocus();
        		this.Div00.combo_search_instanceType.dropdown();
        	
        	}else if(this.Div00.combo_search_court.index==-1){
        		this.alert("법원을 선택하세요.");
        		this.Div00.combo_search_court.setFocus();
        		this.Div00.combo_search_court.dropdown();
        	
        	}else if(this.Div00.edt_case_no.value=''){
        		this.alert("사건번호를 입력하세요.");
        		this.Div00.edt_case_no.setFocus();
        	
        	}else if(this.Div00.cal_dfs_date.value=''){
        		this.alert("변론기일을 선택하세요.");
        		this.Div00.cal_dfs_date.setFocus();
        	
        	}else if(this.Div00.edt_pla_name.text=''){
        		this.alert("원고명을 입력하세요.");
        		this.Div00.edt_pla_name.setFocus();
        	
        	}else if(this.Div00.edt_def_name.text=''){
        		this.alert("피고명을 입력하세요.");
        		this.Div00.edt_def_name.setFocus();
        		
        	}else if(this.Div05.text_cont.text=''){
        		this.alert("고지내용을 입력하세요.");
        		this.Div05.text_cont.setFocus();
        	
        	}else{
        		this.saveLawsuitNoti();
        	}
        }

        // 소송 고지 입력
        this.saveLawsuitNoti = function(obj)
        {
        	var strSvcid = "insertLawsuitNoti";
        	var strController = "noti/insertLawsuitNoti.do";
        	var strParam = "";
        	
        		// 소송고지 등록 transaction
        	this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_lawsuitNoti:U"
        					,""
        					,strParam,
        					"fnCallBack");

        }

        // 소송 고지 등록시 reload
        this.getLawsuitNotiInsert = function()
        {
        	var strSvcid = "getLawsuitNotiInsert";
        	var strController = "noti/getLawsuitNotiInsert.do";
        	var strParam = "";
        	
        	this.gfn_transaction(this
        				,strSvcid
        				,strController
        				,"ds_input=ds_lawsuitNoti:U"
        				,""
        				,strParam,
        				"fnCallBack");
        }

        this.btn_delete_OnClick = function(obj,e)
        {
        	if(this.div_search.edt_adm_no.value != "")
        	{
        		var deleteYN = this.confirm("정말 삭제 하시겠습니까?");
        		if(deleteYN == 1)
        		{
        			// 삭제 실패시를 위해 전역변수(noti_no)에 소송고지 버놓를 넣어준다.
        			var noti_no = this.ds_lawsuitNoti.getColumn(this.ds_lawsuitNoti.rowposition, "lawsuitNotiAdmNo");
        			
        			this.getLawsuitNotiList(noti_no); // 소송관리번호 검색
        			
        			if(this.ds_lawsuitNoti.getColumn(this.ds_lawsuitNoti.rowposition, "lawsuitNotiAdmNo") != null)
        			{
        				this.alert("소송관리에 등록된 소송고지번호를 먼저 삭제해야 합니다.");
        				
        				this.getLawsuitNotiList(noti_no);
        				this.noti_no = "";
        			}else{
        				this.getLawsuitNotiList(noti_no);
        				
        				this.ds_lawsuitNoti.deleteRow(this.ds_lawsuitNoti.rowposition);
        				
        				this.saveLawsuitNoti(); // 삭제
        			}
        			
        			// 삭제 성공시 초기화
        			if(this.noti_no != "")
        			{
        				btn_Clean_OnClick();
        			}
        		}
        	}else{
        		this.alert("삭제할 소송고지 관리 번호를 검색하세요.");
        	}
        }

        this.btn_close_OnClick = function(obj,e)
        {
        	this.close();
        }

        // 사건번호
        this.Div00_btn_case1_onclick = function(obj,e)
        {
        	var v_argParm = new Array(); // 배열선언
            v_argParm[0] = '';
        	//	팝업화면 
        		
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	
        	 var newChild = new ChildFrame;
        	newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::POP_CASE_NO_SEARCH.xfdl");

        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback2");
        }

        this.modal_callback2 = function(strID,Text)
        {

        	if(strID == "Popup1")
        	{
        		if(this.gfn_IsNull(Text))
        		{
        			return;
        		}
        		
        	}
        	this.Div00.edt_case_no.value = Text;
        }

        

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_NOTI_onload, this);
            this.div_search.edt_adm_no.addEventHandler("onchanged", this.edt_adm_no_OnChanged, this);
            this.div_search.edt_adm_no.addEventHandler("oneditclick", this.div_search_edt_adm_no_oneditclick, this);
            this.div_search.btn_list_search.addEventHandler("onclick", this.btn_list_search_OnClick, this);
            this.div_search.btn_clear.addEventHandler("onclick", this.btn_Clean_OnClick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_OnClick, this);
            this.Div00.combo_search_instanceType.addEventHandler("onitemchanged", this.Div00_combo_search_instanceType_onitemchanged, this);
            this.Div00.edt_case_no.addEventHandler("oneditclick", this.Div00_edt_case_no_oneditclick, this);
            this.Div00.btn_case1.addEventHandler("onclick", this.Div00_btn_case1_onclick, this);
            this.Div00.edt_pla_name.addEventHandler("oneditclick", this.Div00_edt_pla_name_oneditclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_OnClick, this);
            this.Div05.Static04.addEventHandler("onclick", this.Div05_Static00_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_OnClick, this);

        };

        this.loadIncludeScript("LAWSUIT_NOTI_copy_org.xfdl");

       
    };
}
)();
