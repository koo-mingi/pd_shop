package nexacro.sample.web.out.web.outlegal.total;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.total.OutLegalWebService;
import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.fdl.property.EgovPropertyService;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;


@Controller
public class OutLegalWebController {
	
	@Resource(name="outLegalWebService")
	private OutLegalWebService outLegalWebService;
	
	/*@Resource(name="propertiesService")
	protected EgovPropertyService propertiesService;*/
	
	// 법류자문 검색 조회
	@RequestMapping(value="OUT_legal_search.do")
	public ModelAndView getSearch(@ModelAttribute("outVO") OutLegalWebVo outVO, HttpSession sess  ) throws Exception{
		 
		ModelAndView mav = new ModelAndView();
        mav.setViewName("../jsp/OUT_main.jsp"); // 뷰 설정
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";  // 메뉴
		center = "../jsp/out/OUT_legal_ad_up.jsp"; // 외부법률조회
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
		
		
		int curpage= 1; // 최초 조회시 1페이지부터 조회
		int totCnt = 0;
		
		PaginationInfo paginationInfo = new PaginationInfo();
	
		try {
			
            totCnt = outLegalWebService.getTotalCount(outVO); // total row count
            
            paginationInfo.setTotalRecordCount(totCnt);
			paginationInfo.setCurrentPageNo(curpage);
			paginationInfo.setRecordCountPerPage(outVO.getRecordCountPerPage());
			paginationInfo.setPageSize(outVO.getPageSize());
			
			mav.addObject("paginationInfo", paginationInfo);
			
			// 리스트 조회
			List outList = outLegalWebService.getOutList(outVO);
			mav.addObject("outList", outList);
			
			mav.addObject("outVO", outVO);
		   
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		       
		
		return mav;
	}
	
	// 법률자문 페이지 조회
	@RequestMapping(value = "OUT_lega_page.do" )
	public ModelAndView getSearchPage(@ModelAttribute("outVO") OutLegalWebVo outVO, HttpSession sess  ) throws Exception{
		 
		ModelAndView mav = new ModelAndView();
        mav.setViewName("../jsp/OUT_main.jsp");
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";  // 메뉴
		center = "../jsp/out/OUT_legal_ad_up.jsp"; // 외부법률조회
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
		
		int curpage=outVO.getPageIndex(); // 조회 페이지 넘버
		int totCnt = 0;
		
		PaginationInfo paginationInfo = new PaginationInfo();
		
	
		try {
			
            totCnt = outLegalWebService.getTotalCount(outVO);
            
            paginationInfo.setTotalRecordCount(totCnt);
			paginationInfo.setCurrentPageNo(curpage);
			paginationInfo.setRecordCountPerPage(outVO.getRecordCountPerPage());
			paginationInfo.setPageSize(outVO.getPageSize());
			
			mav.addObject("paginationInfo", paginationInfo);
			 
			// 첫 페이지 
			outVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
			// 마지막 페이지
			outVO.setLastIndex(paginationInfo.getLastRecordIndex());
			
			// 리스트 조회
			List outList = outLegalWebService.getOutList(outVO);
			mav.addObject("outList", outList);
			
			mav.addObject("outVO", outVO);
		   
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		       
		
		return mav;
	}
		
	// 법률자문상세 조회
	@RequestMapping(value = {"OUT_legal_ad_up_detail.do"})
	public @ResponseBody Model getDetail(HttpServletRequest req, Model model,
			@RequestParam Map<String,String> params) throws Exception{
		
		System.out.println("@@@@@@@@@@@"+params);
		OutLegalWebVo outVO = new OutLegalWebVo();
		
		
		outVO.setLegaladvOutReqLyrid(params.get("legaladvOutReqLyrid"));
		outVO.setLegaladvLawAdvReqNo(params.get("legaladvLawAdvReqNo"));
				
        try {
        	
			List outDetailList = outLegalWebService.getDetail(outVO);
			model.addAttribute("outDetailList", outDetailList);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return model;
	}
	//외부범률자문회신
	@RequestMapping(value="OUT_legal_ad_re_WEB.do")
	public ModelAndView getListRe(OutLegalWebVo outVO,HttpSession sess, String reqNo) throws Exception{
		
        ModelAndView mav = new ModelAndView();
        mav.setViewName("../jsp/OUT_main.jsp");
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_legal_ad_re.jsp";
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
		
        //OutLegalVo outVO = new OutLegalVo();
		String Id=sess.getAttribute("id").toString();
		
		if(reqNo != null){
			System.out.println("=========================reqNo="+reqNo);
			outVO.setLegaladvLawAdvReqNo(reqNo);
			outVO.setLegaladvCostLawadvReqno(reqNo);
		}else{
			if(outVO.getLegaladvLawAdvReqNo()!=null){
				
			}else{
				outVO.setLegaladvLawAdvReqNo("0");
				outVO.setLegaladvCostLawadvReqno("0");
			}
			
		}
			outVO.setLegaladvOutReqLyrid(Id);
			
			List outListRe = outLegalWebService.getOutList(outVO);		
			List outList = outLegalWebService.getCostList(outVO);
		
			mav.addObject("outListRe", outListRe);
			mav.addObject("outList", outList);
		
		//String detail = "../out/OUT_legal_ad_up_detail.jsp";
		//mav.addObject("detail", detail);

		return mav;	
   }
	
	// 외부법률자문회신 상세정보(ajax)
	@RequestMapping(value = "OUT_legal_ad_re_DE_WEB.do")
	public  @ResponseBody Model preiwrListSelectDe(HttpServletRequest req, Model model,@RequestParam Map<String,String> params) throws Exception{
		System.out.println("@@@@@@@@@@@"+params);
		
		OutLegalWebVo outVO = new OutLegalWebVo();
		outVO.setLegaladvCostLawadvReqno(params.get("legaladvCostLawadvReqno"));
		outVO.setLegaladvCostLawadvSeq(params.get("legaladvCostLawadvSeq"));
		
		 try {
			 outVO = outLegalWebService.getLegalAdReDetailList(outVO);
			 System.out.println("================================================outVO"+outVO);
			model.addAttribute("outpreiwr", outVO);
				
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return model;
	}
	
	//외부범률자문회신 팝업
	@RequestMapping(value="OUT_legal_ad_re_POP_WEB.do")
	public ModelAndView getListRePop(@ModelAttribute("outVO") OutLegalWebVo outVO,HttpSession sess) throws Exception{
		
        ModelAndView mav = new ModelAndView();
        mav.setViewName("../jsp/out/OUT_legal_ad_re_POP.jsp");
		
        PaginationInfo paginationInfo = new PaginationInfo();
        
        String outId =sess.getAttribute("id").toString();
		outVO.setLegaladvOutReqLyrid(outId);
        
		int curpage=outVO.getPageIndex();
		int totCnt = 0;
		
		try {
			totCnt = outLegalWebService.getTotalCount(outVO);
			
			// 현재 페이지 번호
			paginationInfo.setCurrentPageNo(curpage);
			// 한페이지당 게시물 로우수
			paginationInfo.setRecordCountPerPage(outVO.getRecordCountPerPage());
			// 페이지 리스트에 게시되는 개수
			paginationInfo.setPageSize(outVO.getPageSize());
			// 전체 게시물 건수
			paginationInfo.setTotalRecordCount(totCnt);
			
			// 조회용 첫 페이지 
			outVO.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 조회용 마지막 페이지
			outVO.setLastIndex(paginationInfo.getLastRecordIndex());
			
			mav.addObject("paginationInfo", paginationInfo);
			
			// 리스트 조회
			List outListPop = outLegalWebService.getOutList(outVO);		
			
			mav.addObject("outListPop", outListPop);
			mav.addObject("outVO", outVO);
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mav;	
   }
	
	//자문비내역 저장
	@RequestMapping(value="OUT_legal_ad_re_save_WEB.do")
	public ModelAndView getListReSave(OutLegalWebVo outVO,String reqNo) throws Exception{

		 ModelAndView mav = new ModelAndView();
		 
		 System.out.println("=================================legaladvLawAdvReqNo="+outVO.getLegaladvLawAdvReqNo());
		 
		 int a=Integer.parseInt(outVO.getLegaladvCostReqCost())+Integer.parseInt(outVO.getLegaladvCostStax());
		 String b=Integer.toString(a);
		 outVO.setLegaladvCostClamsumChg(b);
		 int result=0;
		 if(outVO.getLegaladvCostLawadvSeq()==null||outVO.getLegaladvCostLawadvSeq().equals("")||outVO.getLegaladvCostLawadvSeq().equals(null)){
			 result = outLegalWebService.costInsert(outVO);	
		 }else{
			 result = outLegalWebService.costUpdate(outVO);
		 }
		
		if (result == 1) {
			System.out.println("등록되었습니다.");
		} else {
			System.out.println("등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:OUT_legal_ad_re_WEB.do?reqNo=" + outVO.getLegaladvCostLawadvReqno());
		
		return mav;	
	   }
	
	//자문비내역 삭제
	@RequestMapping(value="OUT_legal_ad_re_delete_WEB.do")
	public ModelAndView getListReDelete(OutLegalWebVo outVO,String reqNo) throws Exception{

		ModelAndView mav = new ModelAndView();
		 
		System.out.println("=================================legaladvLawAdvReqNo="+outVO.getLegaladvLawAdvReqNo());
		 
		int a=Integer.parseInt(outVO.getLegaladvCostReqCost())+Integer.parseInt(outVO.getLegaladvCostStax());
		String b=Integer.toString(a);
		outVO.setLegaladvCostClamsumChg(b);
		System.out.println("==============================legaladvLawAdvReqNo="+outVO.getLegaladvLawAdvReqNo());
		System.out.println("==============================LegalAdvCostLawadvReqno="+outVO.getLegaladvCostLawadvReqno());
		System.out.println("==============================legaladvCostLawadvSeq="+outVO.getLegaladvCostLawadvSeq());
		
		int result = outLegalWebService.costDelete(outVO);	
		
		if (result == 1) {
			System.out.println("삭제되었습니다.");
		} else {
			System.out.println("삭제시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:OUT_legal_ad_re_WEB.do?reqNo=" + outVO.getLegaladvCostLawadvReqno());
		
		return mav;	
	   }
	//외부법률자문회신 저장
	@RequestMapping(value="OUT_legal_ad_re_sa_WEB.do")
	public ModelAndView getListReSa(OutLegalWebVo outVO,String reqNo) throws Exception{

		 ModelAndView mav = new ModelAndView();
		
			int result = outLegalWebService.createOut(outVO);	
			
			if (result == 1) {
				System.out.println("등록되었습니다.");
			} else {
				System.out.println("등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
			}
			mav.setViewName("redirect:OUT_legal_ad_re_WEB.do?reqNo=" + outVO.getLegaladvLawAdvReqNo());
			
			return mav;	
	   }
}
