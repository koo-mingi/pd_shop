package nexacro.sample.service.out;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.out.FileUploadVo;
import nexacro.sample.vo.out.OutPreiwrVo;

public interface OutPreiwrService {
	
	//심급 정보 조회
	public List<OutPreiwrVo> getPreiwrSelect(OutPreiwrVo searchVo);
	
	//준비서면 정보 조회
	public List<OutPreiwrVo> getPreiwrDetail(OutPreiwrVo searchVo);
	
	//준비서면 저장,수정,삭제
	public void OutpreiwrCud(List<OutPreiwrVo> preiwrVo
											,List<FileUploadVo> fileVo);
}
