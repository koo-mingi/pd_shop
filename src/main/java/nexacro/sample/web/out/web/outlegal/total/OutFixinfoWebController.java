package nexacro.sample.web.out.web.outlegal.total;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.total.OutFixinfoWebService;
import nexacro.sample.vo.out.web.outlegal.total.CodeWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutFixinfoLawWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutFixinfoWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutLawNoSearchWebVO;

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
public class OutFixinfoWebController {
	
	@Resource(name = "outFixinfoWebService")
	public OutFixinfoWebService outFixinfoWebService;	
	
	/*@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;*/
	
	// 기일관리 소송번호 팝업 open
	@RequestMapping(value="OUT_LawNo_POP.do")
	public ModelAndView getLawNoSearch(OutFixinfoWebVO fixVo, HttpSession sess ) throws Exception{
		 
		ModelAndView mav = new ModelAndView();
		OutLawNoSearchWebVO lawNoVO=new OutLawNoSearchWebVO(); // 조회 파라미터 세팅용 
	    PaginationInfo paginationInfo = new PaginationInfo();  // 페이징
	    
        mav.setViewName("out/OUT_LawNoSearch_POP");  // 타겟에 넘겨줄 view 
 		
        lawNoVO.setInstAdmEntLyrId(fixVo.getLegaladvOutReqLyrid());  // id 세팅
//        lawNoVO.setInstAdmEntLyrId((String)sess.getAttribute("outid"));  // id 세팅
        
        int curpage = 1;  // 첫 조회시 1페이지로 세팅
		int totCnt = 0;   // count 변수
		
		try {
			totCnt = outFixinfoWebService.getlawNoTotalCount(lawNoVO); // 전체 로우수
			paginationInfo.setTotalRecordCount(totCnt);  
			paginationInfo.setCurrentPageNo(curpage); 
			paginationInfo.setRecordCountPerPage(lawNoVO.getRecordCountPerPage());
			paginationInfo.setPageSize(lawNoVO.getPageSize());  // vo 값으로 세팅
			
			mav.addObject("paginationInfo", paginationInfo);
			
			// id 값으로 소송번호 리스트 조회
			List lawNoSearchList= outFixinfoWebService.getlawNoList(lawNoVO); 
			
			mav.addObject("lawNoSearchList", lawNoSearchList);
			mav.addObject("lawNoVO", lawNoVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		     
        
		return mav;
	}
	
	//기일관리 팝업  조회
	@RequestMapping(value="OUT_lawNo_search_POP.do")
	public ModelAndView getSearch(OutLawNoSearchWebVO lawNoVO, HttpSession sess  ) throws Exception{
		 
		ModelAndView mav = new ModelAndView();
		mav.setViewName("out/OUT_LawNoSearch_POP"); // 수행후 view 세팅
		
		int curpage= 1;  // 검색후 1페이지부터 보여짐
		int totCnt = 0;
		
		PaginationInfo paginationInfo = new PaginationInfo();
		
		try {
			
			totCnt = outFixinfoWebService.getlawNoTotalCount(lawNoVO);  // 전체 로우수
			paginationInfo.setTotalRecordCount(totCnt);
			paginationInfo.setCurrentPageNo(curpage);
			paginationInfo.setRecordCountPerPage(lawNoVO.getRecordCountPerPage());
			paginationInfo.setPageSize(lawNoVO.getPageSize());
			
			mav.addObject("paginationInfo", paginationInfo);
			
			// 검색 조건으로 리스트 조회
			List lawNoSearchList= outFixinfoWebService.getlawNoList(lawNoVO);
			mav.addObject("lawNoSearchList", lawNoSearchList);
			mav.addObject("lawNoVO", lawNoVO);
		
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		       
		return mav;
	}
	
	//기일관리 팝업 페이지 
	@RequestMapping(value="OUT_lawNo_page_POP.do")
	public ModelAndView getSearchPage(OutLawNoSearchWebVO lawNoVO, HttpSession sess  ) throws Exception{
		 
		ModelAndView mav = new ModelAndView();
		mav.setViewName("out/OUT_LawNoSearch_POP");
		
		int curpage= lawNoVO.getPageIndex();  // 조회하려는 페이지 넘버
		int totCnt = 0;
		
		PaginationInfo paginationInfo = new PaginationInfo();
		
		try {
			System.out.println("@@@@@@@@@@@@@@ id"+ lawNoVO.getInstAdmEntLyrId());
			totCnt = outFixinfoWebService.getlawNoTotalCount(lawNoVO);
			System.out.println("@@@@@@@@@@@@@@  count"+ totCnt);
			paginationInfo.setTotalRecordCount(totCnt);
			paginationInfo.setCurrentPageNo(curpage);
			paginationInfo.setRecordCountPerPage(lawNoVO.getRecordCountPerPage());
			paginationInfo.setPageSize(lawNoVO.getPageSize());
			
			mav.addObject("paginationInfo", paginationInfo);
			
			// 첫 페이지 
			lawNoVO.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 마지막 페이지
			lawNoVO.setLastIndex(paginationInfo.getLastRecordIndex());
			
			System.out.println("@@@@@@@@@@@@@@ first "+lawNoVO.getFirstIndex());
			System.out.println("@@@@@@@@@@@@@@ last "+lawNoVO.getLastIndex());
			// 리스트 조회
			
			lawNoVO.setInstAdmEntLyrId((String)sess.getAttribute("outid"));  // id 세팅
			
			List lawNoSearchList= outFixinfoWebService.getlawNoList(lawNoVO);
			mav.addObject("lawNoSearchList", lawNoSearchList);
			mav.addObject("lawNoVO", lawNoVO);
		
		} catch (Exception e) {
			e.printStackTrace();
		}		       
		return mav;
	}
	
	// 기일관리 팝업 부모창 조회
	@RequestMapping(value = "getFixinfoList_POP.do")
	public ModelAndView getFixinfoList(OutFixinfoWebVO fixVo, OutFixinfoLawWebVO fixLawVO, OutLawNoSearchWebVO lawNoVO, HttpSession sess  ) {

		ModelAndView mav = new ModelAndView();

		PaginationInfo paginationInfo = new PaginationInfo();
		
		
		 
		
        mav.setViewName("OUT_main");  // 뷰 설정
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_fixinfo.jsp";
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
		
		
		// 법원 코드세팅
		CodeWebVO vo = new CodeWebVO();
		vo.setClassCode("A01");
		
		fixVo.setLawsuitAdmNo(lawNoVO.getLawsuitAdmNo());
		fixVo.setInstAdmCode(lawNoVO.getInstAdmCode());
		
		System.out.println("@@@@ "+ fixVo.getLawsuitAdmNo());
		System.out.println("@@@@ "+ fixVo.getInstAdmCode());
		
		int curpage= 1;
		int totCnt = 0;
		String lawNo = lawNoVO.getLawsuitAdmNo(); // 심급 갯수 조회용
		
		try {
            
			 // 법원 코드 조회
			List codeSet= outFixinfoWebService.getCode(vo);
			mav.addObject("cortCode", codeSet);
			 
		     // 심급 count		
			 List instSet = outFixinfoWebService.getInstanceList(lawNo);
			 System.out.println("@@@@@ 심급갯수: "+ instSet.get(0));
			 mav.addObject("instSet", instSet);
			 
			 // 기일 토탈 카운트
			 totCnt = outFixinfoWebService.getFixinfoTotalCount(fixVo);
	         paginationInfo.setTotalRecordCount(totCnt);
	         paginationInfo.setCurrentPageNo(curpage);
			 paginationInfo.setRecordCountPerPage(fixVo.getRecordCountPerPage());
			 paginationInfo.setPageSize(fixVo.getPageSize());
			 mav.addObject("paginationInfo", paginationInfo);
			
			// 소송,심급 기본조회
			 fixLawVO = (OutFixinfoLawWebVO)outFixinfoWebService.getLawList(fixVo); //<---------------------------------casting error!!!!!!
			mav.addObject("fixLawVO", fixLawVO);
            
			// 기일정보 조회
			List lawFixinfoList = outFixinfoWebService.getFixinfoList(fixVo);
            mav.addObject("lawFixinfoList", lawFixinfoList);
            
            mav.addObject("fixVo", fixVo); 
     
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return mav;
	}
	
	// 기일관리 조회
	@RequestMapping(value = "getLawFixinfoList.do")
	public ModelAndView getLawFixinfoList(OutFixinfoWebVO fixVo, HttpSession sess ) {

		ModelAndView mav = new ModelAndView();
		OutFixinfoLawWebVO fixLawVO = new OutFixinfoLawWebVO();
		PaginationInfo paginationInfo = new PaginationInfo();
		
        mav.setViewName("OUT_main");
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_fixinfo.jsp";
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
		
		// 법원 코드세팅
		CodeWebVO vo = new CodeWebVO();
		vo.setClassCode("A01");
		
		int curpage= fixVo.getPageIndex(); // 조회 페이지넘버
		int totCnt = 0;
		String lawNo = fixVo.getLawsuitAdmNo(); // 심급 갯수 조회용
		
		try {
			
			 // 법원 코드 조회
			 List codeSet= outFixinfoWebService.getCode(vo);
			 mav.addObject("cortCode", codeSet);
			 
			 // 심급갯수		
			 List instSet = outFixinfoWebService.getInstanceList(lawNo);
			 System.out.println("@@@@@ 심급갯수: "+ instSet.get(0));
			 mav.addObject("instSet", instSet); 
			
			 totCnt = outFixinfoWebService.getFixinfoTotalCount(fixVo);
	         paginationInfo.setTotalRecordCount(totCnt);
	         paginationInfo.setCurrentPageNo(curpage);
			 paginationInfo.setRecordCountPerPage(fixVo.getRecordCountPerPage());
			 paginationInfo.setPageSize(fixVo.getPageSize());
			 mav.addObject("paginationInfo", paginationInfo);
			 
			// 첫 페이지 
			fixVo.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 마지막 페이지
			fixVo.setLastIndex(paginationInfo.getLastRecordIndex());
			
			// 소송,심급 기본조회
			fixLawVO = (OutFixinfoLawWebVO)outFixinfoWebService.getLawList(fixVo); 
			mav.addObject("fixLawVO", fixLawVO);
            
			// 기일정보 조회
			List<OutFixinfoWebVO> lawFixinfoList = outFixinfoWebService.getFixinfoList(fixVo);
            mav.addObject("lawFixinfoList", lawFixinfoList);
            
            mav.addObject("fixVo", fixVo); 
     
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return mav;
	}
	
	// 기일관리 상세 조회
	@RequestMapping(value = {"getFixinfoDetail.do"})
	public @ResponseBody Model getDetail(HttpServletRequest req, Model model,
			@RequestParam Map<String,String> params) throws Exception{
		
		System.out.println("@@@@@@@@@@@"+params);
		
		OutFixinfoWebVO fixVo = new OutFixinfoWebVO();
		fixVo.setLawFixinfoNum(params.get("lawFixinfoNum"));
		fixVo.setLawsuitAdmNo(params.get("lawsuitAdmNo"));
		fixVo.setInstAdmCode(params.get("instAdmCode"));
		
        try {
        	
        	// 상세조회
			fixVo=(OutFixinfoWebVO)outFixinfoWebService.getFixinfoDetail(fixVo);
			model.addAttribute("fixinfoDetail", fixVo);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return model;
	}
	
	// 기일관리 입력,수정
	@RequestMapping(value = "insertFixinfo.do")
	public ModelAndView insertFixinfo(OutFixinfoWebVO fixVo, HttpSession sess ) {

		ModelAndView mav = new ModelAndView();
		OutFixinfoLawWebVO fixLawVO = new OutFixinfoLawWebVO();
		PaginationInfo paginationInfo = new PaginationInfo();
		
        mav.setViewName("OUT_main"); // 뷰설정
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_fixinfo.jsp";
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
        
		int curpage= fixVo.getPageIndex(); // 조회 현 페이지 세팅
		int totCnt = 0;
		String lawNo = fixVo.getLawsuitAdmNo(); // 조회용 소송번호 세팅
		
		// 법원 코드세팅
		CodeWebVO vo = new CodeWebVO();
		vo.setClassCode("A01");
		
		try {
             // 시작일시
			 String yM =fixVo.getLawFixinfoDate1(); // 일시
			 String ho =fixVo.getLawFixinfoDate2(); // 시
			 String mi =fixVo.getLawFixinfoDate3(); // 분
			 fixVo.setLawFixinfoDate(yM+ho+mi); // 일시+ 시+ 분 
			 System.out.println("@@@ 시작일시 "+ fixVo.getLawFixinfoDate());
			 // 마감일시
			 yM = fixVo.getLawFixinfoDlinDate1();
			 ho = fixVo.getLawFixinfoDlinDate2();
			 mi = fixVo.getLawFixinfoDlinDate3();
			 fixVo.setLawFixinfoDlinDate(yM+ho+mi);
			 System.out.println("@@@ 마감일시 " + fixVo.getLawFixinfoDlinDate());
			 
			 String num = fixVo.getLawFixinfoNum();
			 System.out.println("@@@@@@ 일련번호" + num+"@@");
			 int result;
			 
			 if( num == null || num.length() == 0){
				 // 일련번호가 없을 시 입력
				 result = outFixinfoWebService.insertFixinfo(fixVo);
				 
			 }else{
				 // 일련번호 존재시 수정
				 result= outFixinfoWebService.updateFixinfo(fixVo);
				 
			 }
			  
			 if (result == 1) {
				 
				System.out.println("정상적으로 글이 등록되었습니다.");
			 
			 } else {
				 
				System.out.println("등록 중 오류가 발생하였습니다. ");
			 }
			 
			 // 심급갯수		
			 List instSet = outFixinfoWebService.getInstanceList(lawNo);
			 System.out.println("@@@@@ 심급갯수: "+ instSet.get(0));
			 mav.addObject("instSet", instSet);
			 
			 totCnt = outFixinfoWebService.getFixinfoTotalCount(fixVo);
	         paginationInfo.setTotalRecordCount(totCnt);
	         paginationInfo.setCurrentPageNo(curpage);
			 paginationInfo.setRecordCountPerPage(fixVo.getRecordCountPerPage());
			 paginationInfo.setPageSize(fixVo.getPageSize());
			 mav.addObject("paginationInfo", paginationInfo);
			 
			// 첫 페이지 
			fixVo.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 마지막 페이지
			fixVo.setLastIndex(paginationInfo.getLastRecordIndex());
			
			// 법원 코드 조회
			List codeSet= outFixinfoWebService.getCode(vo);
			mav.addObject("cortCode", codeSet);
			 
			// 소송,심급 기본조회
			fixLawVO = (OutFixinfoLawWebVO)outFixinfoWebService.getLawList(fixVo); 
			mav.addObject("fixLawVO", fixLawVO);
            
			// 기일정보 조회
			List<OutFixinfoWebVO> lawFixinfoList = outFixinfoWebService.getFixinfoList(fixVo);
            mav.addObject("lawFixinfoList", lawFixinfoList);
            
            // 입력수정 상세사항 재조회 
            OutFixinfoWebVO detailVo = (OutFixinfoWebVO)outFixinfoWebService.getFixinfoDetail(fixVo);
            mav.addObject("fixinfoDetail", detailVo);
            
            mav.addObject("fixVo", fixVo); 
     
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return mav;
	}
	
	// 기일관리 입력,수정
	@RequestMapping(value = "deleteFixinfo.do")
	public ModelAndView deleteFixinfo(@ModelAttribute("fixVo") OutFixinfoWebVO fixVo, HttpSession sess ) {

		ModelAndView mav = new ModelAndView();
		OutFixinfoLawWebVO fixLawVO = new OutFixinfoLawWebVO();
		PaginationInfo paginationInfo = new PaginationInfo();
		
        mav.setViewName("OUT_main"); // 뷰설정
        
		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_fixinfo.jsp";
		
		mav.addObject("top"	,top);
		mav.addObject("center" ,center);
        
		int curpage= fixVo.getPageIndex(); // 조회 현 페이지 세팅
		int totCnt = 0;
		String lawNo = fixVo.getLawsuitAdmNo(); // 조회용 소송번호 세팅
		
		// 법원 코드세팅
		CodeWebVO vo = new CodeWebVO();
		vo.setClassCode("A01");
		
		try {
			 
			 int result = outFixinfoWebService.deleteFixinfo(fixVo); 
			 
			 if (result == 1) {
				 
				System.out.println("정상적으로 글이 삭제되었습니다.");
			 
			 } else {
				 
				System.out.println("삭제 중 오류가 발생하였습니다. ");
			 }
			 
			 // 심급갯수		
			 List instSet = outFixinfoWebService.getInstanceList(lawNo);
			 mav.addObject("instSet", instSet);
			 
			 totCnt = outFixinfoWebService.getFixinfoTotalCount(fixVo);
	         paginationInfo.setTotalRecordCount(totCnt);
	         paginationInfo.setCurrentPageNo(curpage);
			 paginationInfo.setRecordCountPerPage(fixVo.getRecordCountPerPage());
			 paginationInfo.setPageSize(fixVo.getPageSize());
			 mav.addObject("paginationInfo", paginationInfo);
			 
			// 첫 페이지 
			fixVo.setFirstIndex(paginationInfo.getFirstRecordIndex()+1);
			// 마지막 페이지
			fixVo.setLastIndex(paginationInfo.getLastRecordIndex());
			
			// 법원 코드 조회
			List codeSet= outFixinfoWebService.getCode(vo);
			mav.addObject("cortCode", codeSet);
			 
			// 소송,심급 기본조회
			fixLawVO = (OutFixinfoLawWebVO)outFixinfoWebService.getLawList(fixVo); 
			mav.addObject("fixLawVO", fixLawVO);
            
			// 기일정보 조회
			List<OutFixinfoWebVO> lawFixinfoList = outFixinfoWebService.getFixinfoList(fixVo);
            mav.addObject("lawFixinfoList", lawFixinfoList);
            
            // 입력수정 상세사항 재조회 
            OutFixinfoWebVO detailVo = (OutFixinfoWebVO)outFixinfoWebService.getFixinfoDetail(fixVo);
            mav.addObject("fixinfoDetail", detailVo);
            
            mav.addObject("fixVo", fixVo); 
     
		} catch (Exception e) {
			
			e.printStackTrace();
		}

		return mav;
	}
	
}
