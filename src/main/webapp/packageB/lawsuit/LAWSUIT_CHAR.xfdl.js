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
                this.set_name("LAWSUIT_CHAR");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,480,385);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mgr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaEmail\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mgrno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col><Col id=\"id\">-1</Col></Row><Row><Col id=\"value\">사번</Col><Col id=\"id\">0</Col></Row><Row><Col id=\"value\">이름</Col><Col id=\"id\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "14", "63", "456", "37", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "20", "69", "444", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "14", "109", "100", "13", null, null, this);
            obj.set_text("소송담당자 목록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_person", "absolute", "14", "126px", "456", "220", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_mgr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"121\"/><Column size=\"123\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"이메일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:insaSabun\"/><Cell col=\"2\" text=\"bind:insaName\"/><Cell col=\"3\" text=\"bind:insaEmail\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_mgr_com", "absolute", "81", "72", "86", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_mgrno");
            obj.set_codecolumn("id");
            obj.set_datacolumn("value");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Edit("edt_mgr_tx", "absolute", "172", "72", "171", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mgr_search", "absolute", "348", "70", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "414", "352", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("닫기");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_check", "absolute", "354", "352", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "7", "456", "50", null, null, this);
            obj.set_taborder("6");
            obj.set_text("  소제기 의뢰자 조회");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("left");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 480, 385, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_CHAR");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","cmb_mgr_com","value","ds_instance","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_CHAR.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_CHAR.xfdl", function() {
        //include "Lib::common.xjs";

        
        var raiscode="";

        this.LAWSUIT_CHAR_onload=function(obj,e)
        {
            this.edt_mgr_tx.setFocus();
            trace("부모 : "+this.parent.id);
            if(this.parent.id =='stats_SearchModal'){
        		if(typeof(this.parent.data)=="undefined"|| this.parent.data=="전체"  ){
        			this.edt_mgr_tx.set_value("")
        		}else this.edt_mgr_tx.set_value(this.parent.data);
        	}else  this.edt_mgr_tx.set_value("")
            this.getList();
        }

        // 셀 더블클릭
        this.grd_person_oncelldblclick=function(obj,e)
        {
            // close(grd_person.getCellValue(e.row,0)+grd_person.getCellValue(e.row,1));
        	this.btn_check_onclick();
        }

        this.getList=function(){
           
            var strSvcid="getMgrList";
            var strController="lawsuit/getMgrList.do";
            var strParam="";
            //var strParam = "insaSabun='" + gfn_Trim(cmb_mgr_com.value) + "'";
            //    strParam += " insaName='" + gfn_Trim(edt_mgr_tx.value) + "'";
        	trace("값값 : "+this.cmb_mgr_com.value);
            if(this.cmb_mgr_com.value == -1){      
                strParam = "insaName=" + "\""+this.edt_mgr_tx.value+"\"";
            }else if(this.cmb_mgr_com.value == 0){
                strParam = "insaSabun=" + "\""+this.edt_mgr_tx.value+"\"";
            }else if(this.cmb_mgr_com.value == 1){
                strParam = "insaName=" + "\""+this.edt_mgr_tx.value+"\"";
            }   
           if(typeof(this.edt_mgr_tx.value)=='undefined') strParam = "insaName=" + "\""+""+"\"";
            trace("char : "+strParam);       
           
            this.gfn_transaction(this,
                            strSvcid,
                            strController,
                            "",
                            "ds_mgr=ds_output",
                            strParam,
                            "fnCallBack");
        }

        this.fnCallBack=function(svcid,errcd,errmsg)
        {
            switch(svcid)
            {
                case "getMgrList":
                    //trace(ds_mgr.saveXML());
                    //데이터 조회 에러 발생시
                    if(errcd != "0"){   
                    alert("데이터가 정상적으로 조회되지 않았습니다.\n"
                        + "소송관리조회 에러내용: "+ errmsg);
                    return false;
                    }
                    else{
                       
                    }
                    break;
            }
        }

        this.btn_mgr_search_onclick=function(obj,e)
        {
            this.getList();
        }

        this.btn_close_onclick=function(obj,e)
        {
            this.close();
        }

        /*function edt_mgr_tx_onkeydown(obj:Edit, e:KeyEventInfo)
        {
            if(e.keycode == 13){
                btn_mgr_search_onclick();
            }
        }*/

        this.cmb_mgr_com_onitemchanged=function(obj,e)
        {
            if(this.cmb_mgr_com.value == -1){
                this.edt_mgr_tx.set_value("");
                this.edt_mgr_tx.set_enable(false);
            }else{
                this.edt_mgr_tx.set_enable(true);
            }
        }

        /*    function grd_person_onheadclick(obj:Grid, e:GridClickEventInfo)
        {
            gfn_GridSort(grd_person,grd_lawsuit_no,nCell,10);
        }    */

        // Grid Row Select
        this.btn_check_onclick=function(obj,e)
        {
            /*	var id = ds_mgr.getColumn(ds_mgr.rowposition, "insaSabun");
            var name = ds_mgr.getColumn(ds_mgr.rowposition, "insaName");
          
            parent.mgrId.text = id;
            ds_mgr.addRow();

            close(id+"&"+name);	*/
           
            /*var v_RtnVal = new Array();	//배열생성

        	v_RtnVal[0] = this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaSabun");
        	v_RtnVal[1] = this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaName");	*/
        	var v_RtnVal = this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaSabun");
        	v_RtnVal +="&"+this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaName");
        	trace("팡ㅂ엄 이름: "+this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaName"));
        	this.close(v_RtnVal);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_CHAR_onload, this);
            this.grd_person.addEventHandler("oncelldblclick", this.grd_person_oncelldblclick, this);
            this.cmb_mgr_com.addEventHandler("onitemchanged", this.cmb_mgr_com_onitemchanged, this);
            this.edt_mgr_tx.addEventHandler("onkeydown", this.edt_mgr_tx_onkeydown, this);
            this.btn_mgr_search.addEventHandler("onclick", this.btn_mgr_search_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_check.addEventHandler("onclick", this.btn_check_onclick, this);

        };

        this.loadIncludeScript("LAWSUIT_CHAR.xfdl");

       
    };
}
)();
