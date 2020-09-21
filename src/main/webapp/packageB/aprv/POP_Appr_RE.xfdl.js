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
                this.set_name("POP_Appr_RE");
                this.set_titletext("New Form");
                this.set_cssclass("btn_WF_Search");
                this._setFormPosition(0,0,600,459);
            }
            this.style.set_font("bold 9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_PosGbn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"value\">사원</Col></Row><Row><Col id=\"value\">주임</Col><Col id=\"code\">002</Col></Row><Row><Col id=\"value\">대리</Col><Col id=\"code\">003</Col></Row><Row><Col id=\"value\">과장</Col><Col id=\"code\">004</Col></Row><Row><Col id=\"value\">차장</Col><Col id=\"code\">005</Col></Row><Row><Col id=\"value\">상무</Col><Col id=\"code\">006</Col></Row><Row><Col id=\"value\">사장</Col><Col id=\"code\">007</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaPosGbnCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"cdoenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdoenm\">전체</Col></Row><Row><Col id=\"codeno\">001</Col><Col id=\"cdoenm\">총무부</Col></Row><Row><Col id=\"codeno\">002</Col><Col id=\"cdoenm\">SI사업부</Col></Row><Row><Col id=\"codeno\">003</Col><Col id=\"cdoenm\">관리부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "14", "136", "572", "251", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "67", "572", "35", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "572", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  사원조회");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22", "72", "557", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Combo("insa_combo", "absolute", "28", "75", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("cdoenm");
            obj.set_text("전체");
            obj.style.set_font("9 Dotum");
            obj.set_index("0");

            obj = new Static("Static20", "absolute", "14", "106", "100", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("작성정보");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Search", "absolute", "20", "143", "559", null, null, "79", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_insa");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 자료가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"85\"/><Column size=\"86\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직급\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:insaDeptCode\" combodataset=\"ds_dept\" combocodecol=\"codeno\" combodatacol=\"cdoenm\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:insaPosGbnCode\" combodataset=\"ds_PosGbn\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:insaSabun\"/><Cell col=\"3\" text=\"bind:insaName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", "531", "399", "55", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "169", "73", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 572, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  사원조회");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 459, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.set_cssclass("btn_WF_Search");
            		p.style.set_font("bold 9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item13","insa_combo","value","ds_lawsuitNoti","lawsuitNotiInstSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Static01","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static02","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POP_Appr_RE.xfdl", "Lib::common.xjs");
        this.registerScript("POP_Appr_RE.xfdl", function() {
        //include "Lib::common.xjs";

        //로딩시
        this.POP_Appr_RE_onload=function(obj,e){
        	this.btn_search_form("");
        	//this.gf_codeComListLoad("ds_dept",  "ds_dept",   "Y", "", "", "fn_Callback", "S01");
        }

        this.btn_search_form=function(insaDeptCode){
        //this.ds_search.addRow();
        //insaDeptCode=="" ? this.ds_search.setColumn(0,"insaDeptCode",insaDeptCode) : this.ds_search.setColumn(0,"insaDeptCode",this.insa_combo.value) ;
        var paramdept='';
        insaDeptCode=="" ? paramdept+="deptI=" +"\""+insaDeptCode+"\"":  paramdept+="deptI=" +"\""+this.insa_combo.value+"\"";
        paramdept+="sabun="+"\""+""+"\"";
        this.gfn_transaction(this,"approvalList","/apprline/ApprovalList.do","","ds_insa=ds_output",paramdept,"fnCallback");

        }

        // 그리드 더블클릭시
        this.grd_Search_oncelldbclick=function(obj,e){
        var mDept="";
        if(this.grd_Search.getCellValue(this.ds_insa.rowposition,0)=="001"){
        mDept="총무부(001)";
        	}else if(this.grd_Search.getCellValue(this.ds_insa.rowposition,0)=="002"){
        mDept="SI사업부(002)";
        	}else{
        	mDept="관리부(003)";
        	}
        this.close(this.grd_Search.getCellValue(e.row,3)+"("+this.grd_Search.getCellValue(e.row,2)+")"+mDept);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.close();
        }

        //검색버튼 클릭시
        this.btn_search_OnClick=function(obj,e){
        var dept;
        		if(this.insa_combo.value=="총무부"){
        			dept="001";
        		}
        		if(this.insa_combo.value=="SI사업부"){
        			dept="002";
        		}
        		if(this.insa_combo.value=="관리부"){
        			dept="003";
        		}
        		this.btn_search_form(dept);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.POP_Appr_RE_onload, this);
            this.insa_combo.addEventHandler("onitemchanged", this.cmb_search_onitemchanged, this);
            this.grd_Search.addEventHandler("oncelldblclick", this.grd_Search_oncelldbclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_OnClick, this);

        };

        this.loadIncludeScript("POP_Appr_RE.xfdl");

       
    };
}
)();
