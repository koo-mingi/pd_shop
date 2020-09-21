package nexacro.sample.service.out;

import java.util.List;

import nexacro.sample.vo.out.OutEdocAdmVo;

public interface OutEdocAdmService {
	
	//소송정보 조회
	public List<OutEdocAdmVo> getLawsuitSelect(OutEdocAdmVo edocVo);
	
	//호증정보 조회
	public List<OutEdocAdmVo> getEdocAdmInfoGap(OutEdocAdmVo edocVo);
	
	//호증정보 조회
	public List<OutEdocAdmVo> getEdocAdmInfoEul(OutEdocAdmVo edocVo);

	//호증정보 저장,수정,삭제
	public void OutEdocAdmCud(List<OutEdocAdmVo> edocVo1
												,List<OutEdocAdmVo> edocVo2);
}

