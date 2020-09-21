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
                this.set_name("ApprLine");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1030,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_appr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"AprvlineAdmUpAprvcode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"value\">총무부(001)</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">SI사업부(002)</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">관리부(003)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprvLine", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"value\">소제기의뢰(001)</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">소송접수(002)</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">응소(제소)보고관리(003)</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">조정안관리(004)</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">재판외화해관리(005)</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">판결보고(006)</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">소송종결(007)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_seq", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">*</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">***</Col><Col id=\"value\">***</Col></Row><Row><Col id=\"value\">001</Col><Col id=\"code\">001</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">002</Col></Row><Row><Col id=\"value\">003</Col><Col id=\"code\">003</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">004</Col></Row><Row><Col id=\"value\">005</Col><Col id=\"code\">005</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">006</Col></Row><Row><Col id=\"value\">007</Col><Col id=\"code\">007</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">001</Col><Col id=\"value\">소제기의뢰</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">소송접수</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">응소(제소)보고관리</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">조정안관리</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">재판외화해관리</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">판결보고</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">소송종결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_apprln", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"AprvlineAdmUpAprvcode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_seq1", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_codeno", this);
            obj._setContents("<ColumnInfo><Column id=\"code_no\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_new", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"AprvlineAdmUpAprvcode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaPosGbnCode\" type=\"STRING\" size=\"256\"/><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_seqseq", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\"> 1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">     2</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">          3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprvLine1", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">***</Col><Col id=\"value\">***</Col></Row><Row><Col id=\"code\">001</Col><Col id=\"value\">소제기의뢰(001)</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">소송접수(002)</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">응소(제소)보고관리(003)</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">조정안관리(004)</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">재판외화해관리(005)</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">판결보고(006)</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">소송종결(007)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_new1", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"AprvlineAdmUpAprvcode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmUpId\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_savep", this);
            obj._setContents("<ColumnInfo><Column id=\"saveKey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "14", "539", "1002", "62", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "106", "1002", "399", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "1002", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  결재단계 등록");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("list_com", "absolute", "13", "72", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Grid("Grid_appr", "absolute", "21", "113", "989", "385", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_appr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"173\"/><Column size=\"55\"/><Column size=\"82\"/><Column size=\"85\"/><Column size=\"119\"/><Column size=\"154\"/><Column size=\"87\"/><Column size=\"80\"/><Column size=\"148\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"결재라인\"/><Cell col=\"1\" text=\"결재순번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"결재자ID\"/><Cell col=\"4\" text=\"결재자부서\"/><Cell col=\"5\" text=\"상위결재라인코드\"/><Cell col=\"6\" text=\"상위결재순번\"/><Cell col=\"7\" text=\"전결여부\"/><Cell col=\"8\" text=\"상위결재자ID\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:aprvlineAdmProcCode\" combodataset=\"ds_aprvLine\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:aprvlineAdmSeq\" combodataset=\"ds_seqseq\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:insaName\"/><Cell col=\"3\" text=\"bind:aprvlineAdmAprvId\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:aprvlineAdmAprvDeptId\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:aprvlineAdmUpAprvcode\" combodataset=\"ds_aprvLine1\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:aprvlineAdmUpSeq\" combodataset=\"ds_seq\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"7\" text=\"bind:aprvlineAdmAdWtr\"/><Cell col=\"8\" text=\"bind:aprvlineAdmUpId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "21", "545", "988", "25", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Combo("line_com", "absolute", "131", "548", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_aprvLine");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Static("Static18", "absolute", "21", "545", "105", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("결재진행단계코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "266", "545", "105", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("결재라인순번");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "519", "545", "105", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("상위결재라인순번");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "763", "545", "105", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("잔결여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("lineSeq_com", "absolute", "376", "548", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@ds_seq1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_enable("false");

            obj = new Combo("lineUpSeq_com", "absolute", "629", "548", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@ds_seq");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_enable("false");

            obj = new Combo("yn_com", "absolute", "873", "548", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_enable("false");

            obj = new Static("Static05", "absolute", "22", "569", "987", "25", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "609", "569", "105", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("상위결재자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "341", "569", "105", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("결재자부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "21", "569", "105", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("결재자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "618", "55", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "894", "618", "55", "23", null, null, this);
            obj.set_taborder("24");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close01", "absolute", "833", "618", "55", "23", null, null, this);
            obj.set_taborder("25");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new_lit", "absolute", "771", "618", "55", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("insaSabun", "absolute", "131", "572", "140", "19", null, null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "277", "570", "55", "23", null, null, this);
            obj.set_taborder("28");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("insaDept", "absolute", "451", "572", "140", "19", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("insaUpId", "absolute", "719", "572", "140", "19", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1030, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","line_com","value","ds_apprln","aprvlineAdmProcCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","lineSeq_com","value","ds_apprln","aprvlineAdmSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","lineUpSeq_com","value","ds_apprln","aprvlineAdmUpSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","yn_com","value","ds_apprln","aprvlineAdmAdWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Static00","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Static09","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("ApprLine.xfdl", "Lib::common.xjs");
        this.registerScript("ApprLine.xfdl", function() {
        //include "Lib::common.xjs";

        var insertYn="n";

        //로딩시
        this.ApprLine_onload=function(obj,e)
        {
        trace("ss");
        	insertYn="n";
        	this.ds_appr.clearData();
        	this.ds_appr.addRow();
        	this.search_payment();
        }

        
        //결재라인조회
        this.search_payment=function(){
        trace("결재라인조회");
        	//var strParam="code_no=" + "\""+this.combo_Clas_Code.value+"\""+" seq=" + Quote(seq) + " id=" + Quote(id);
        	this.gfn_transaction(this,
        			  "approvalLineList",
        			  "/apprline/ApprovalLineList.do",
        			  "",
        			  "ds_appr = ds_output",
        			  "",
        			  "fnCallback");	
        }

        //결재라인조회 코드별
        this.search_payment_code=function(code_no){
        trace("/결재라인조회 코드별");
        this.ds_appr.setColumn(0,"aprvlineAdmProcCode",code_no);

        if(typeof(this.ds_appr.getColumn(0,'aprvlineAdmProcCode'))=='undefined') {
        trace('전체는 여기지');
         this.ds_appr.clearData();
         this.ApprLine_onload();
         }
         else {
        this.gfn_transaction(this,"approvalLineListcode","/apprline/ApprovalLineListCode.do",
        "ds_appr=ds_appr",
        "ds_appr=ds_output","","fnCallback");
        }
        }

        
        //LIST_COM 콤보박스 값이 바뀔때
        this.list_combo_change=function(obj,e){

        if(this.list_com.text=='전체') this.search_payment();
        else this.search_payment_code(this.list_com.value);
        }

        // 그리드 클릭시
        this.grd_Search_oncellclick=function(obj,e){
        trace("그리드");
        this.ds_new.addRow();
        this.lineSeq_com.set_enable(false);
        this.yn_com.set_enable(true);
        this.ds_new.setColumn(0,"aprvlineAdmProcCode",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmProcCode"));
        this.ds_new.setColumn(0,"aprvlineAdmSeq",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmSeq"));
        this.ds_new.setColumn(0,"aprvlineAdmAprvId",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmAprvId"));
        this.ds_new.setColumn(0,"aprvlineAdmAprvDeptId",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmAprvDeptId"));
        this.ds_new.setColumn(0,"AprvlineAdmUpAprvcode",this.ds_appr.getColumn(this.ds_appr.rowposition,"AprvlineAdmUpAprvcode"));
        this.ds_new.setColumn(0,"aprvlineAdmUpSeq",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmUpSeq"));
        this.ds_new.setColumn(0,"aprvlineAdmAdWtr",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmAdWtr"));
        this.ds_new.setColumn(0,"aprvlineAdmUpId",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmUpId"));
        this.ds_new.setColumn(0,"insaName",this.ds_appr.getColumn(this.ds_appr.rowposition,"insaName"));

        //this.ds_insa.setColumn(0,"insaSabun",this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmUpId"));

        this.insaSabun.set_value(this.ds_appr.getColumn(this.ds_appr.rowposition,"insaName")+"("+this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmAprvId")+")");
        this.insaDept.set_value(this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmAprvDeptId"));

        this.gfn_transaction(this,"apprLineDetailList","/apprline/ApprLineDetailL.do","ds_new=ds_new","ds_apprln=ds_output","","fnCallback");
        var strParamInsa="sabun="+"\""+this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmUpId")+"\""+"deptI="+"\""+""+"\"";
        this.gfn_transaction(this,"apprNameList","apprline/ApprovalList.do","","ds_insa=ds_output",strParamInsa,"fnCallback");
        }

        //콜백 
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {

        trace("에러0 : "+nErrorCode);
        trace("에러2 : "+sErrorMsg);
        trace("에러3 : "+sSvcId);
        trace("콜백");
        if(sSvcId == "approvalLineList"){	
        	this.ds_appr.rowposition=0;
        		this.grd_Search_oncellclick();	
        	}
        if(sSvcId=="apprLineDetailList"){ 

        
         this.line_com.set_enable(false);

        
         if(this.insaDept.value=='001') this.insaDept.set_value("총무부(001)");
         if(this.insaDept.value=='002') this.insaDept.set_value("SI사업부(002)");
         if(this.insaDept.value=='003') this.insaDept.set_value("관리부(003)");
          
         }
         if(sSvcId == "apprLineInsert"){
         trace("1dd헐헐1  : "+parseInt(this.ds_apprln.rowposition)+1);

        

        		if( nErrorCode==0 &&sErrorMsg=='success'){
        		trace("저장");
        			this.Grid_appr.set_enable(true);
        			 trace("22");
        			if(insertYn=="y"){			
        				alert("저장되었습니다.");
        				this.ds_apprln.clearData();
        				this.ds_apprln.addRow();	
        			}else{
        				alert("수정되었습니다");
        				this.ds_apprln.clearData();
        				this.ds_apprln.addRow();
        				
        			}
        			insertYn="n";
        			this.search_payment();
        		}else {

        		alert("저장을 실패하였습니다. ");
        		}
        	}
        	if(sSvcId == "apprDelete"){
        	trace("삭제로넘어옴");
        		if(nErrorCode == 0){
        			alert("삭제 되었습니다");
        			this.search_payment();					
        		}else{
        			alert("삭제에 실패했습니다");
        		}
        	}
        	if(sSvcId == "apprLineupdate"){
        		if(nErrorCode == 0){
        			alert("수정 되었습니다");
        			this.search_payment();
        		}else{
        		alert("수정에 실패했습니다");
        		}
        	}
        	
        	if(sSvcId=="apprNameList"){
        	if(this.ds_insa.getColumn(0,"insaSabun")==null){
        			this.insaUpId.set_value("***");
        			
        		}else{
        			this.insaUpId.set_value(this.ds_insa.getColumn(0,"insaName")+"("+this.ds_insa.getColumn(0,"insaSabun")+")");
        		}
        	}
        }
        //사원검색
        this.btn_emp_search_OnClick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "aprv::POP_Appr_RE.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame()
        						,""
        						, this
        						, "modal_callback");
        }

        // 추가버튼
        this.btn_new_onClick = function(obj,e)
        {

        if(this.insertYn=="y"){
        		alert("등록을 완료한 후에 새로 추가하세요");
        		return;
        	}
        	insertYn="y";
        	this.ds_apprln.clearData();
        	this.ds_apprln.addRow();
        	this.Grid_appr.set_enable(false);
        	this.ds_appr.insertRow(this.ds_appr.rowposition+1 );
        	this.insaSabun.set_value("");
        	this.insaDept.set_value("");
        	this.line_com.set_enable(true);
        	this.lineSeq_com.set_enable(true);
        	this.yn_com.set_enable(true);
        	
        	this.ds_apprln.setColumn(0,"aprvlineAdmProcCode",this.ds_new.getColumn(0,"aprvlineAdmProcCode"));
        	//순번 
        	var seq=parseInt(this.ds_new.getColumn(0,"aprvlineAdmSeq"))+1;

        	if(this.ds_new.getColumn(0,"aprvlineAdmSeq")=="3"){
        		alert("3차에서는 추가할수 없습니다");
        		this.ds_apprln.clearData();
        		this.ds_apprln.addRow();
        	}else{
        		if(seq=="4"){
        			this.lineSeq_com.set_value("3");
        			this.lineUpSeq_com.set_value("2");
        		}else if(seq=="3"){
        			this.lineSeq_com.set_value(seq);
        			this.lineUpSeq_com.set_value("2");
        			this.yn_com.set_value("Y");
        		}else{
        			this.lineSeq_com.set_value(seq);
        			this.lineUpSeq_com.set_value("1");
        			this.yn_com.set_value("N");
        		}if(this.lineSeq_com.value=="1"){
        			this.lineUpSeq_com.set_value("*");
        			this.insaUpId.set_value("***");
        		}	
        	
        	}
        		if(this.lineSeq_com.value=="1"){
        			this.lineUpSeq_com.set_value("*");
        			this.insaUpId.set_value("***");
        		}
        	else{
        		
        		this.insaUpId.set_value(this.ds_new.getColumn(0,"insaName")+"("+this.ds_new.getColumn(0,"aprvlineAdmAprvId")+")");
        		
        	}

        }

        //삭제
        this.btn_delete_OnClick=function(obj,e){
        	this.Grid_appr.set_enable(true);
        	
        	if(application.confirm("삭제하시겠습니까?")==true){

        		if(insertYn=="y"){
        	
        			this.ds_appr.deleteRow(this.ds_appr.rowposition);
        			insertYn="n";
        		}else{
        			var code_no=this.ds_appr.getColumn(this.ds_appr.rowposition, 'aprvlineAdmProcCode');
        			var seq_no=this.ds_appr.getColumn(this.ds_appr.rowposition, 'aprvlineAdmSeq');
        			var id_no=this.ds_appr.getColumn(this.ds_appr.rowposition, 'aprvlineAdmAprvId');
        			var yn="n";
        			for( i=0;i<this.ds_appr.rowcount;i++){
        			
        			if((this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmProcCode")==this.ds_appr.getColumn(i,"aprvlineAdmProcCode"))&&(this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmSeq").toString()==this.ds_appr.getColumn(i,"aprvlineAdmUpSeq"))&&(this.ds_appr.getColumn(this.ds_appr.rowposition,"aprvlineAdmAprvId")==this.ds_appr.getColumn(i,"aprvlineAdmUpId"))){
        					trace("상위");
        					alert("상위 결재자를 먼저 삭제하세요");
        					yn="n";
        					break;
        				}else{
        				trace("삭제되야지.");
        					yn="y";
        				}
        			}
        			if(yn=="y"){
        			trace("들어옴");
        				var strParam = "code_no=" +"\""+code_no+"\""+"seq_no=" +"\""+seq_no+"\""+"id_no=" +"\""+id_no+"\""; 
        				
        				this.gfn_transaction(this,"apprDelete"
        							, "/apprline/deleteappr.do"
        							, ""
        							, ""
        							, strParam
        							, "fnCallback");	
        			}
        		}
        	}else{
        		return;					
        	}
        	
        }

        //등록, 수정
        this.apprSave=function(){
        trace("apprSave");
        //trace("내맘속에저장 :" +this.ds_apprln.saveXML());
        this.gfn_transaction(this,"apprLineInsert",
        					"/apprline/insertappr.do",
        					"ds_input=ds_apprln:U",
        					"",
        					"",
        					"fnCallback");
        }

        //저장
        this.btn_appr_save_OnClick=function(obj,e){
        var strsabun=this.insaSabun.value.split("(");
        var strdept=this.insaDept.value.split("(");

        
        var dname=strdept[0];
        var dnum=strdept[1];
        if(this.insaSabun.value==""){
        		alert("결재자를 등록해주세요");
        	}else{	
        		this.ds_apprln.setColumn(0,"aprvlineAdmAprvId",this.insaSabun.value.split("(")[1].substr(0,10));

        // 		if(this.insaDept.value.substr(0,1)=="S"){
        // 			this.ds_apprln.setColumn(0,"aprvlineAdmAprvDeptId",this.insaDept.value.substr(6,3));
        // 		}else{
        // 			this.ds_apprln.setColumn(0,"aprvlineAdmAprvDeptId",this.insaDept.value.substr(4,3));
        // 		}
        		this.ds_apprln.setColumn(0,"aprvlineAdmAprvDeptId",dnum.substr(0,3));
        		
        		if(this.insaUpId.value.substr(0,1)=="*"){
        			this.ds_apprln.setColumn(0,"aprvlineAdmUpId","***");
        		}else{
        			this.ds_apprln.setColumn(0,"aprvlineAdmUpId",this.insaUpId.value.split("(")[1].substr(0,10));
        		}
        		if(this.line_com.value=="소제기의뢰"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","001");
        			}	
        		}else if(this.line_com.value=="소송접수"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","002");
        			}
        		}else if(this.line_com.value=="응소(제소)보고관리"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","003");
        			}	
        		}else if(this.line_com.value=="조정안관리"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","004");
        			}	
        		}else if(this.line_com.value=="재판외화해관리"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","005");
        			}	
        		}else if(this.line_com.value=="판결보고"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","006");
        			}	
        		}else if(this.line_com.value=="소송종결"){
        			if(this.lineSeq_com.value=="1"){
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","***");
        			}else{
        				this.ds_apprln.setColumn(0,"AprvlineAdmUpAprvcode","007");
        			}	
        		}
        	
        		this.apprSave();
        	}
        }
        this.btn_close_OnClick = function(obj,e)
        {
        var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        
        this.modal_callback = function(strID,variant)
        {
        trace("모달값: "+variant);
        var str=variant.split(")");
        	this.insaSabun.set_value(str[0]+")");
        	this.insaDept.set_value(str[1]+")");
        }

        //결재라인순번값이 바뀔때
        this.lineSeq_com_OnChanged=function(){
        trace("결제라인순번 바뀜");
        if(this.lineSeq_com.value=="1"){
        trace("결제라인순번 바뀜1");
        		this.lineUpSeq_com.set_value("0");		
        		this.yn_com.set_value("N");
        		this.insaUpId.set_value("***");
        	}else if(this.lineSeq_com.value=="2"){
        	trace("결제라인순번 바뀜2");
        		this.lineUpSeq_com.set_value("1");	
        		this.yn_com.set_value("N");
        	}else{
        	trace("결제라인순번 바뀜3");
        		this.lineUpSeq_com.set_value("2");
        		this.yn_com.set_value("Y");
        	}
        }

        //결재단계코드값이 바뀔때
        this.line_com_OnChanged=function(){
        if(this.lineSeq_com.value=="1"){
        		this.lineUpSeq_com.set_value("*");	
        		this.yn_com.set_value("N");
        		this.insaUpId.set_value("***");
        	}else if(this.lineSeq_com.value=="2"){
        		this.lineUpSeq_com.set_value("1");	
        		this.yn_com.set_value("N");
        	}else{
        		this.lineUpSeq_com.set_value("2");
        		this.yn_com.set_value("Y");
        	}
        }
        this.list_com_OnChanged=function(){
        	var code=this.list_com.value;
        	if(code=="전체"){
        		this.search_payment();
        	}else{
        		if(code=="소제기의뢰"){
        			code="001";	
        		}else if(code=="소송접수"){
        			code="002";	
        		}else if(code=="응소(제소)보고관리"){
        			code="003";	
        		}else if(code=="조정안관리"){
        			code="004";	
        		}else if(code=="재판외화해관리"){
        			code="005";	
        		}else if(code=="판결보고"){
        			code="006";	
        		}else if(code=="소송종결"){
        			code="007";	
        		}
        		this.search_payment_code(code);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.ApprLine_onload, this);
            this.list_com.addEventHandler("onitemchanged", this.list_com_OnChanged, this);
            this.Grid_appr.addEventHandler("oncellclick", this.grd_Search_oncellclick, this);
            this.Grid_appr.addEventHandler("oncelldblclick", this.grd_Search_oncellDbclick, this);
            this.line_com.addEventHandler("onitemchanged", this.line_com_OnChanged, this);
            this.Static18.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static18_onclick, this);
            this.lineSeq_com.addEventHandler("onitemchanged", this.lineSeq_com_OnChanged, this);
            this.Static06.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static18_onclick, this);
            this.Static08.addEventHandler("onclick", this.Static18_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_OnClick, this);
            this.btn_close00.addEventHandler("onclick", this.btn_delete_OnClick, this);
            this.btn_close01.addEventHandler("onclick", this.btn_appr_save_OnClick, this);
            this.btn_new_lit.addEventHandler("onclick", this.btn_new_onClick, this);
            this.btn_search.addEventHandler("onclick", this.btn_emp_search_OnClick, this);

        };

        this.loadIncludeScript("ApprLine.xfdl");

       
    };
}
)();
