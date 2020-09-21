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
                this.set_name("unde_curr");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_clas_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search_key", this);
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDateMin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDateMax\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lawRaisreqReqId\">전체</Col><Col id=\"lawRaisreqClasCode\">100</Col><Col id=\"lawRaisreqRepWtr\">A</Col><Col id=\"lawRaisreqDateMin\"/><Col id=\"lawRaisreqDateMax\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wtr_search", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">회신</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미회신</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_stats", this);
            obj._setContents("<ColumnInfo><Column id=\"raisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqRepWtrNnum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqRepWtrYnum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqRepWtrNum\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit001\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit002\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit003\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit004\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit005\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuit099\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitSum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqRepWtrNnumraisreqRepWtrNnum\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCodeCount\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_curr_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codenm\">전체</Col></Row><Row><Col id=\"codeno\">001</Col><Col id=\"codenm\">구상</Col></Row><Row><Col id=\"codeno\">002</Col><Col id=\"codenm\">의료과실</Col></Row><Row><Col id=\"codeno\">003</Col><Col id=\"codenm\">장기채무부존재</Col></Row><Row><Col id=\"codeno\">004</Col><Col id=\"codenm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view01", "absolute", "14", "161", "996", "421", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "61", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "71", "984", "25", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "95", "984", "25", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "14", "137", "996", "19", null, null, this);
            obj.set_taborder("0");
            obj.set_text("소송 미결 현황");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("  소송 미결 현황");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "585", "55", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id_search", "absolute", "140", "74", "140", "19", null, null, this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "351", "71", "115", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("소송제기분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "71", "115", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("의뢰자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_id_search", "absolute", "288", "72", "55", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_clas_code", "absolute", "471", "74", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_text("전체");
            obj.set_innerdataset("@ds_curr_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_align("left middle");
            obj.set_index("0");

            obj = new Static("Static04", "absolute", "351", "95", "115", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("기준일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("rad_wtr", "absolute", "140", "98", "198", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_wtr_search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_value("A");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static03", "absolute", "20", "95", "115", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date02", "absolute", "631", "98", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_type("normal");

            obj = new Calendar("cal_date01", "absolute", "471", "98", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_type("normal");

            obj = new Static("Static05", "absolute", "610", "98", "10", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "882", "96", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "943", "96", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "21", "167", "983", "409", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_stats");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"92\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"3\" text=\"상태\"/><Cell col=\"5\" colspan=\"7\" text=\"소송유형\"/><Cell row=\"1\" text=\"의뢰자\"/><Cell row=\"1\" col=\"1\" text=\"소송제기분류\"/><Cell row=\"1\" col=\"2\" text=\"미회신\"/><Cell row=\"1\" col=\"3\" text=\"회신\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"민사\"/><Cell row=\"1\" col=\"6\" text=\"형사\"/><Cell row=\"1\" col=\"7\" text=\"특허\"/><Cell row=\"1\" col=\"8\" text=\"행정\"/><Cell row=\"1\" col=\"9\" text=\"가사\"/><Cell row=\"1\" col=\"10\" text=\"기타\"/><Cell row=\"1\" col=\"11\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:insaName\" expr=\"expr:insaName +&quot; (&quot;+raisreqreqid+&quot;)&quot;\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:lawraisreqclascode\" combodataset=\"ds_curr_code\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:raisreqrepwtrnnum\"/><Cell col=\"3\" text=\"bind:raisreqrepwtrynum\"/><Cell col=\"4\" text=\"bind:raisreqrepwtrnum\"/><Cell col=\"5\" text=\"bind:lawsuit001\"/><Cell col=\"6\" text=\"bind:lawsuit002\"/><Cell col=\"7\" text=\"bind:lawsuit003\"/><Cell col=\"8\" text=\"bind:lawsuit004\"/><Cell col=\"9\" text=\"bind:lawsuit005\"/><Cell col=\"10\" text=\"bind:lawsuit099\"/><Cell col=\"11\" expr=\"expr:lawsuit001+lawsuit002+lawsuit003+lawsuit004+lawsuit005+lawsuit099\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqrepwtrnnum)&quot;)+&quot; 건 &quot;\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqrepwtrynum)&quot;)+&quot; 건 &quot;\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqrepwtrnum)&quot;)+&quot; 건 &quot;\"/><Cell col=\"5\" expr=\"expr:dataset.getSum('parseInt(lawsuit001)') + &quot;건&quot;\"/><Cell col=\"6\" expr=\"expr:dataset.getSum('parseInt(lawsuit002)') + &quot;건&quot;\"/><Cell col=\"7\" expr=\"expr:dataset.getSum('parseInt(lawsuit003)') + &quot;건&quot;\"/><Cell col=\"8\" expr=\"expr:dataset.getSum('parseInt(lawsuit004)') + &quot;건&quot;\"/><Cell col=\"9\" expr=\"expr:dataset.getSum('parseInt(lawsuit005)') + &quot;건&quot;\"/><Cell col=\"10\" expr=\"expr:dataset.getSum('parseInt(lawsuit099)') + &quot;건&quot;\"/><Cell col=\"11\" expr=\"expr:dataset.getSum('parseInt(lawsuitsum)') + &quot;건&quot;\"/></Band></Format></Formats>");
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
            obj = new BindItem("item2","cal_date02","value","ds_search_key","lawRaisreqDateMax");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_date01","value","ds_search_key","lawRaisreqDateMin");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("unde_curr.xfdl", "Lib::common.xjs");
        this.registerScript("unde_curr.xfdl", function() {

        //include "Lib::common.xjs";

        this.btn_reset_onclick = function(obj,e)
        {
        	this.edt_id_search.set_value("전체");
        	this.cmb_clas_code.set_value("100");
         	this.ds_search_key.setColumn(0, "lawRaisreqClasCode", this.cmb_clas_code.value);
        	this.rad_wtr.set_index(0);
        	this.ds_search_key.setColumn(0, "lawRaisreqRepWtr", this.rad_wtr.value);
        	this.ds_search_key.setColumn(0, "lawRaisreqReqId","");
        	this.cal_date01.set_value("");
        	this.cal_date02.set_value("");
        	this.btn_search_onclick();
        }

        this.unde_curr_onload = function(obj,e)
        {
        	this.gf_codeComListLoad("raisreq_clas_code", "ds_clas_code", "N", "", "", "fnCallback", "D01");
        	this.btn_search_onclick();
        }

        this.btn_id_search_onclick = function(obj,e)
        {		 
        	//모달 창이 나올 좌표 값을 설정한다
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	 
        	//새로운 모달 창을 띄우기 위한 객체 선언
        	var newChild = new ChildFrame;
        	 
        	//새로운 플러그인(모달)을 생성한 후 초기화 시키는 메소드
        	//매개변수 : '플러그인명', 좌표형태, 생성위치x좌표, 생성위치y좌표,
        	//				sizeWidth, sizeHeight, 포지션 좌표x, 포지션 y좌표
        	newChild.init("stats_SearchModal"
        					, "absolute", nLeft, nTop, 700, 600, null, null
        					,/* "rais::POP_RAISREQ_MEN.xfdl"*/"lawsuit::LAWSUIT_CHAR.xfdl");
        					
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, {data:this.edt_id_search.value}
        						, this
        						, "stats_modal_callback");
        						
        	
        }

        this.stats_modal_callback = function(modal,variable)
        {
        	var idx = variable.indexOf("&"); 
        		var a = variable.substring(0, idx);
        		var b = variable.substring(idx+1);
        		this.edt_id_search.set_value(b);
        	this.ds_search_key.setColumn(0, "lawRaisreqReqId", a);
        }

        this.btn_search_onclick = function(obj,e)
        {
        //  	if(this.cal_date01.value == ""|| this.cal_date02.value == "")
        //  	{
        //  		alert("입력되지않은 값이 있습니다.");
        //  		return;
        //  	}
         
         	var reqid = this.ds_search_key.getColumn(0, "lawRaisreqReqId");
         	
         	if(reqid != "전체"){
        		var fixedreqid = reqid.substring(0, 10);
        		this.ds_search_key.setColumn(0, "lawRaisreqReqId", fixedreqid);
        	}
        	
        	this.gfn_transaction(
        		this,
        		"getStatsListSelect",
        		"/stats/getStatsListSelect.do",
        		"ds_search_key=ds_search_key",
        		"ds_stats=ds_stats",
        		"",
        		"fnCallback"
        	);
        		
        	this.ds_search_key.setColumn(0, "lawRaisreqReqId", reqid);
        	
        }

        this.fnCallback = function(id,errcode,errmsg)
        {
        	if(id == "raisreq_clas_code"){
        		this.ds_clas_code.addRow();
        		this.ds_clas_code.setColumn(this.ds_clas_code.rowcount-1, "codenm", "전체");
        		this.ds_clas_code.setColumn(this.ds_clas_code.rowcount-1, "codeno", "100");
        	}
        	if(id=='getStatsListSelect') {
        	//trace(this.ds_stats.saveXML());
        	if(errcode == 0){
        		
        		   if(this.ds_stats.getRowCount()<1){
        		   
        		      alert( "조회 내용이 없습니다");
        		      this.btn_reset_onclick();
        		   }
        		
        		}
        	for(var i=0;i<this.ds_stats.getRowCount();i++){

        	if(typeof (this.ds_stats.getColumn(i,"insaName"))=='undefined') this.ds_stats.setColumn(i,"insaName"," ");
        	if(typeof (this.ds_stats.getColumn(i,"raisreqreqid"))=='undefined') this.ds_stats.setColumn(i,"raisreqreqid","");
        	} 
        	}
        }

        this.btn_zip_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }
        this.rad_wtr_onitemchanged = function(obj,e)
        {
        	this.ds_search_key.setColumn(0, 2, this.rad_wtr.value);
        	trace(this.ds_search_key.getColumn(0, 2));
        }

        this.cmb_clas_code_onitemchanged = function(obj,e)
        {
        	if (typeof(this.cmb_clas_code.value)=='undefined')  {
        		this.cmb_clas_code.set_value("100") ;
        		this.ds_curr_code.setColumn(0,"codeno",'100');
        	}
        	this.ds_search_key.setColumn(0, 1, this.cmb_clas_code.value);
        	trace(this.ds_search_key.getColumn(0, 1));
        }

        this.edt_id_search_oneditclick = function(obj,e)
        {
        	this.btn_id_search_onclick();
        }
        this.edt_ID_OnKeyDown = function(obj,e)
        {
            if( e.keycode == 13 ){
               this.btn_search_onclick();
            }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.unde_curr_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_zip_onclick, this);
            this.edt_id_search.addEventHandler("oneditclick", this.edt_id_search_oneditclick, this);
            this.edt_id_search.addEventHandler("onkeydown", this.edt_ID_OnKeyDown, this);
            this.btn_id_search.addEventHandler("onclick", this.btn_id_search_onclick, this);
            this.cmb_clas_code.addEventHandler("onitemchanged", this.cmb_clas_code_onitemchanged, this);
            this.rad_wtr.addEventHandler("onitemclick", this.rad_wtr_onitemclick, this);
            this.rad_wtr.addEventHandler("onitemchanged", this.rad_wtr_onitemchanged, this);
            this.cal_date02.addEventHandler("oneditclick", this.Calendar00_oneditclick, this);
            this.cal_date01.addEventHandler("oneditclick", this.Calendar00_oneditclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);

        };

        this.loadIncludeScript("unde_curr.xfdl");

       
    };
}
)();
