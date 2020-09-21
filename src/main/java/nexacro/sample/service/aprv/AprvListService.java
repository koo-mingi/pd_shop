package nexacro.sample.service.aprv;

import java.util.List;

import nexacro.sample.vo.aprv.AprvListEmplVO;
import nexacro.sample.vo.aprv.AprvListVO;

public interface AprvListService {

	public List<AprvListVO> getAprvInfo(AprvListVO vo);
	
	public List<AprvListVO> getAprvInfoCnt();
}
