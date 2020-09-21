package nexacro.sample.service.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.Pre_iwrVO;

public interface Pre_iwrService {

	//TAB_INST_ADM
	public List<Pre_iwrVO> getInstAdm(Pre_iwrVO vo);
	
	//TAB_PRE_IWR
	public List<Pre_iwrVO> getPreIwr(Pre_iwrVO vo);

	//TAB_INSA에서 판사 이름 가져오기
	public List<Pre_iwrVO> getJudgName();
	
	//TAB_INSA에서 변호사 이름 가져오기
	public List<Pre_iwrVO> getLawyerName();

	//TAB_PRE_IWR C,U,D
	public String pre_iwrSave(List<Pre_iwrVO> list);
	
	
	/*
	//준비서면조회
	public List<Pre_iwrVO> get_pre_iwr(Map<String, Object> get_pre_iwrMap);
	
	//저장,수정,삭제
	public String pre_iwrsave(List<Pre_iwrVO> pre_iwrVO, String lawAdmNo, String instCode);
	
	*/
}
