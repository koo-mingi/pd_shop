package nexacro.sample.web.out.web.outlegal.total;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.total.OutEdocAdmWebService;
import nexacro.sample.service.out.web.outlegal.total.OutFixinfoWebService;
import nexacro.sample.service.out.web.outlegal.total.OutPreiwrWebService;
import nexacro.sample.vo.out.web.outlegal.total.CodeWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;
import nexacro.sample.web.out.web.outlegal.common.ImageProcessingUtil;
import nexacro.sample.web.out.web.outlegal.common.RegexStringUtil;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.fdl.property.EgovPropertyService;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

@Controller
public class OutEdocAdmWebController {
	@Resource(name = "outEdocAdmWebService")
	public OutEdocAdmWebService outEdocAdmWebService;

	@Resource(name="outPreiwrWebService")
	public OutPreiwrWebService outPreiwrWebService;

	@Resource(name = "outFixinfoWebService")
	public OutFixinfoWebService outFixinfoWebService;

	/*@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;*/

	//서증관리
	@RequestMapping(value = "OUT_edoc_adm_WEB.do")
	public ModelAndView getLawsuitInfo(@ModelAttribute("outVO") OutLegalWebVo outVO, HttpSession sess,String reqNo) {

		ModelAndView mav = new ModelAndView();
		mav.setViewName("OUT_main");

		String top 			= "";
		String center		= "";

		top= "../jsp/template/top.jsp";
		center = "../jsp/out/OUT_edoc_adm.jsp";

		mav.addObject("top"	,top);
		mav.addObject("center" ,center);

		String outId =sess.getAttribute("outid").toString();

		System.out.println("=================LawsuitAdmNo1="+outVO.getLawsuitAdmNo());
		System.out.println("=================reqNo1="+reqNo);
		
		if(reqNo==null){
			if(outVO.getLawsuitAdmNo()==null){
				outVO.setLawsuitAdmNo("0");
			}

			System.out.println("=================LawsuitAdmNo2="+outVO.getLawsuitAdmNo());
		}else{
			outVO.setLawsuitAdmNo(reqNo);
		}

		System.out.println("=================LawsuitAdmNo3="+outVO.getLawsuitAdmNo());
		outVO.setLegaladvOutReqLyrid(outId);
		outVO.setInstAdmEntLyrId(outId);

		// 법원 코드세팅
		CodeWebVO vo = new CodeWebVO();
		vo.setClassCode("A01");

		int curpage1=outVO.getPageIndex1();
		int totCnt1 = 0;
		int curpage2=outVO.getPageIndex2();
		int totCnt2 = 0;
		System.out.println("==========================curpage1="+curpage1);
		System.out.println("==========================curpage2="+curpage2);

		PaginationInfo paginationInfo1 = new PaginationInfo();
		PaginationInfo paginationInfo2 = new PaginationInfo();
		try {

			// 법원 코드 조회
			List codeSet= outFixinfoWebService.getCode(vo);
			mav.addObject("cortCode", codeSet);

			totCnt1 = outEdocAdmWebService.getTotalCount1(outVO);
			totCnt2 = outEdocAdmWebService.getTotalCount2(outVO);
			System.out.println("==========================tnt1="+totCnt1);
			System.out.println("==========================tnt2="+totCnt2);

			// 현재 페이지 번호
			paginationInfo1.setCurrentPageNo(curpage1);
			paginationInfo2.setCurrentPageNo(curpage2);

			// 한페이지당 게시물 로우수
			paginationInfo1.setRecordCountPerPage(outVO.getRecordCountPerPage());
			paginationInfo2.setRecordCountPerPage(outVO.getRecordCountPerPage());
			// 페이지 리스트에 게시되는 개수
			paginationInfo1.setPageSize(outVO.getPageSize());
			paginationInfo2.setPageSize(outVO.getPageSize());
			// 전체 게시물 건수
			paginationInfo1.setTotalRecordCount(totCnt1);
			paginationInfo2.setTotalRecordCount(totCnt2);
			if(curpage2==0){
				// 조회용 첫 페이지 
				outVO.setFirstIndex(paginationInfo1.getFirstRecordIndex()+1);
				outVO.setFirstIndex1(1);

				// 조회용 마지막 페이지
				outVO.setLastIndex(paginationInfo1.getLastRecordIndex());
				outVO.setLastIndex1(5);
			}else if(curpage1==0){
				outVO.setFirstIndex(1);
				outVO.setFirstIndex1(paginationInfo2.getFirstRecordIndex()+1);
				outVO.setLastIndex(5);
				outVO.setLastIndex1(paginationInfo2.getLastRecordIndex());
			}
			mav.addObject("paginationInfo1", paginationInfo1);
			mav.addObject("paginationInfo2", paginationInfo2);

			//소송정보
			List lawsuitList = outEdocAdmWebService.getLawsuitInfo(outVO);
			//서증정보 갑호증
			List edocAdmList1 = outEdocAdmWebService.getEdocAdmList1(outVO);
			//서증정보 을호증
			List edocAdmList2 = outEdocAdmWebService.getEdocAdmList2(outVO);

			mav.addObject("lawsuitList", lawsuitList);
			mav.addObject("edocAdmList1", edocAdmList1);
			mav.addObject("edocAdmList2", edocAdmList2);

			mav.addObject("outVO", outVO);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return mav;
	}

	// 서증관리 상세정보(ajax)
	@RequestMapping(value = "OUT_edoc_adm_DE_WEB.do")
	public  @ResponseBody Model preiwrListSelectDe(HttpServletRequest req, Model model,@RequestParam Map<String,String> params) throws Exception{
		System.out.println("@@@@@@@@@@@"+params);

		OutLegalWebVo outVO = new OutLegalWebVo();
		outVO.setLawsuitAdmNo(params.get("lawsuitAdmNo"));
		outVO.setEdocAdmSeq(params.get("edocAdmSeq"));

		try {
			outVO = outEdocAdmWebService.getEdocAdmDetailList(outVO);
			System.out.println("================================================outVO"+outVO);
			model.addAttribute("outedoc", outVO);

		} catch (Exception e) {

			e.printStackTrace();
		}

		return model;
	}

	//서증관리 저장
	@RequestMapping(value="OUT_edoc_adm_save_WEB.do")
	public ModelAndView getListReSave(OutLegalWebVo outVO,String reqNo) throws Exception{

		ModelAndView mav = new ModelAndView();
		System.out.println("========================LawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("========================EdocAdmSeq="+outVO.getEdocAdmSeq());
		int result=0;
		if(outVO.getEdocAdmSeq()==null||outVO.getEdocAdmSeq()==""||outVO.getEdocAdmSeq().equals(null)||outVO.getEdocAdmSeq().equals("")){
			result = outEdocAdmWebService.edocAdmInsert(outVO);	
		}else{
			result = outEdocAdmWebService.edocAdmUpdate(outVO);
		}		

		if (result == 1) {
			System.out.println("등록되었습니다.");
		} else {
			System.out.println("등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:OUT_edoc_adm_WEB.do?reqNo=" + outVO.getLawsuitAdmNo());	
		return mav;	
	}

	//서증관리 삭제
	@RequestMapping(value="OUT_edoc_adm_delete_WEB.do")
	public ModelAndView getListReDelete(OutLegalWebVo outVO,String reqNo) throws Exception{

		ModelAndView mav = new ModelAndView();

		int result=outEdocAdmWebService.edocAdmDelete(outVO);	

		if (result == 1) {
			System.out.println("등록되었습니다.");
		} else {
			System.out.println("등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:OUT_edoc_adm_WEB.do?reqNo=" + outVO.getLawsuitAdmNo());	
		return mav;	
	}
	//첨부파일 팝업
	@RequestMapping(value="AddFilePop2.do")
	public ModelAndView getListPreEntPop(@ModelAttribute("outVO") OutLegalWebVo outVO, HttpSession sess,String lawNo,String edocSeq) throws Exception{

		ModelAndView mav = new ModelAndView();
		if(lawNo!=null){
			outVO.setLawsuitAdmNo(lawNo);
		}
		if(edocSeq!=null){
			outVO.setEdocAdmSeq(edocSeq);
		}
		mav.setViewName("out/AddFilePop2");

		int curpage=outVO.getPageIndex();
		int totCnt = 0;

		PaginationInfo paginationInfo = new PaginationInfo();

		String outId =sess.getAttribute("outid").toString();
		System.out.println("========++++++++++LawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("========++++++++++EdocAdmSeq="+outVO.getEdocAdmSeq());
		System.out.println("========++++++++++"+outVO.getSearch1());
		System.out.println("========++++++++++"+outVO.getSearch2());
		outVO.setInstAdmEntLyrId(outId);
		try {
			totCnt = outEdocAdmWebService.getTotalCount(outVO);

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
			List addFileList = outEdocAdmWebService.getAddFile(outVO);	

			mav.addObject("addFileList", addFileList);
			mav.addObject("outVO", outVO);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return mav;	
	}


	//첨부파일 팝업 업로드
	@RequestMapping(value="AddFilePopUp_WEB.do")
	public ModelAndView getListEntPopUp(OutLegalWebVo outVO,@RequestParam("file") MultipartFile file) throws Exception{

		System.out.println("========================================="+file);
		ModelAndView mav = new ModelAndView();
		System.out.println("======================lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("======================edocAdmSeq="+outVO.getEdocAdmSeq());

		/** MVC : VIEW */
		mav.setViewName("redirect:AddFilePop2.do?lawNo="+outVO.getLawsuitAdmNo()+"&edocSeq="+outVO.getEdocAdmSeq());
		//				mav.setViewName("redirect:AddFilePop?reqNo=" + outVO.getLawsuitAdmNo());
		/** MVC : MODEL */
		byte[] bytes = null;

		String full=file.getOriginalFilename();
		System.out.println("======================full="+full);
		String[] fullName=full.split("\\.");
		System.out.println("======================fullName="+fullName);
		String PcFileName =fullName[0];
		String Ext=fullName[1];
		System.out.println("======================PcFileName="+PcFileName);
		System.out.println("======================Ext="+Ext);
		bytes = file.getBytes();

		//		Date date=new Date(System.currentTimeMillis());
		//		SimpleDateFormat CurDateFormat=new SimpleDateFormat("YYYYMMddmm");
		//		String currentdate=CurDateFormat.format(date); 

		// 2013-01-18.idealful.확장자 추출
		String fileExt = RegexStringUtil.extractRegexMatches("\\.\\w+\\z",file.getOriginalFilename()).substring(1);

		// 2013-01-18.idealful.확장자에 따른 하위폴더이름을 생성하고 지정

		//		String insideDirectory = new SimpleDateFormat("yyyyMMdd").format(new GregorianCalendar().getTime());

		// 2013-01-18.idealful."경로\파일명.확장자" 설정
		String fileName = "\\\\192.168.0.50\\1.Setup\\05.07기 인트라넷\\FileUpDown\\"+"서증관리_"+outVO.getLawsuitAdmNo() +"_"+ full;

		File pathMaker = new File(fileName);
		new File(pathMaker.getParent()).mkdir();

		FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(fileName));

		//		FileWebVO fileVO = new FileWebVO();
		//		
		//		fileVO.setLawsuitAdmNo(outVO.getLawsuitAdmNo());
		//		fileVO.setEdocAdmSeq(outVO.getEdocAdmSeq());

		outVO.setAddFilePcFile(PcFileName);
		outVO.setAddFilePcFileExt(Ext);
		outVO.setAddFileSize(file.getBytes().length);

		outVO.setAddFileAdmName("서증_"+outVO.getLawsuitAdmNo());

		if (ImageProcessingUtil.isImage(fileExt)) {
			int[] xy = ImageProcessingUtil.sizeXY(file.getInputStream());

			outVO.setImgHeight(xy[0] + "");
			outVO.setImgWidth(xy[1] + "");
		} else {
			outVO.setImgHeight("");
			outVO.setImgWidth("");
		}
		System.out.println("===================================AddFileRelSeq="+outVO.getAddFileRelSeq());
		// insert
		int result = outEdocAdmWebService.getFileWrite(outVO);
		System.out.println("===================================AddFileRelSeq="+outVO.getAddFileRelSeq());
		int result1 = outEdocAdmWebService.insertFileEdoc(outVO);

		if (result == 1 && result1==1) {
			System.out.println("정상적으로 글이 등록되었습니다.");
		} else {
			System.out.println("파일없는글 등록시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		return mav;
	}

	//서증관리 파일 삭제
	@RequestMapping(value="deleteFilePop2.do")
	public ModelAndView DeleteEdocFilePop(OutLegalWebVo outVO,HttpSession sess) throws Exception{

		ModelAndView mav = new ModelAndView();
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---edocAdmSeq="+outVO.getEdocAdmSeq());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		String[] all1=outVO.getLawsuitAdmNo().split(",");
		String[] all2=outVO.getEdocAdmSeq().split(",");
		String[] all3=outVO.getAddFileRelSeq().split(",");
		String a=all1[0];
		String b=all2[0];
		String c=all3[0];
		outVO.setLawsuitAdmNo(a);
		outVO.setEdocAdmSeq(b);
		outVO.setAddFileRelSeq(c);
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---edocAdmSeq="+outVO.getEdocAdmSeq());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());
		int result=outEdocAdmWebService.deleteEdocFile(outVO);	

		if (result == 1) {
			System.out.println("삭제되었습니다.");
		} else {
			System.out.println("삭제시 오류가 발생하였습니다. 관리자에게 문의하세요.");
		}
		mav.setViewName("redirect:AddFilePop2.do?lawNo=" + outVO.getLawsuitAdmNo()+"&edocSeq="+outVO.getEdocAdmSeq());	
		return mav;	
	}	
	//서증관리 파일 다운로드
	@RequestMapping(value="downloadFileEdoc.do")
	public ModelAndView downloadFileEdoc(OutLegalWebVo outVO,HttpSession sess,HttpServletResponse response) throws Exception{

		ModelAndView mav = new ModelAndView();
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---edocAdmSeq="+outVO.getEdocAdmSeq());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		System.out.println("++++++++++---addFileSerFileName="+outVO.getAddFileSerFileName());
		String[] all1=outVO.getLawsuitAdmNo().split(",");
		String[] all2=outVO.getEdocAdmSeq().split(",");
		String[] all3=outVO.getAddFileRelSeq().split(",");
		String[] all4=outVO.getAddFileSerFileName().split(",");
		String a=all1[0];
		String b=all2[0];
		String c=all3[0];
		String d=all4[0];
		outVO.setLawsuitAdmNo(a);
		outVO.setEdocAdmSeq(b);
		outVO.setAddFileRelSeq(c);
		outVO.setAddFileSerFileName(d);
		System.out.println("++++++++++++++++===lawsuitAdmNo="+outVO.getLawsuitAdmNo());
		System.out.println("++++++++++---edocAdmSeq="+outVO.getEdocAdmSeq());
		System.out.println("++++++++++---addFileRelSeq="+outVO.getAddFileRelSeq());
		System.out.println("++++++++++---addFileSerFileName="+outVO.getAddFileSerFileName());
		outVO.setPreIwrOutLyrid(sess.getAttribute("outid").toString());
		@SuppressWarnings("deprecation")
		String strFilename=outVO.getAddFileSerFileName();
		String strFilenameOutput=new String(strFilename.getBytes("euc-kr"),"8859_1");
		File file=new File("\\\\192.168.0.50\\1.Setup\\05.07기 인트라넷\\FileUpDown\\"+strFilename);
		byte bb[]=new byte[(int)file.length()];
		response.setHeader("Content-Disposition","attachment;filename="+strFilenameOutput);
		response.setHeader("Content-Length",String.valueOf(file.length()));
		if(file.isFile()){
			BufferedInputStream fin=new BufferedInputStream(new FileInputStream(file));
			BufferedOutputStream outs=new BufferedOutputStream(response.getOutputStream());
			int read=0;
			while((read=fin.read(bb))!=-1){outs.write(bb,0,read);}
			outs.close();
			fin.close();
		}

//		mav.setViewName("redirect:AddFilePop2.do?lawNo=" + outVO.getLawsuitAdmNo()+"&instCode="+outVO.getInstAdmCode()+"&edocSeq="+outVO.getEdocAdmSeq());	
		return null;	
	}
}