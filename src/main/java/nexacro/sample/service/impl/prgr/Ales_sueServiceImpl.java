package nexacro.sample.service.impl.prgr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.prgr.Ales_sueDAO;
import nexacro.sample.service.prgr.Ales_sueService;
import nexacro.sample.vo.prgr.Ales_sueVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

@Service("ales_sueService")
public class Ales_sueServiceImpl implements Ales_sueService {
	
	@Resource(name = "ales_sueDao")
	private Ales_sueDAO ales_sueDao;
	
	//기본조회
	@Override
	public List<Ales_sueVO> law_suitSelect(Map<String, Object> selectMap) {
		return ales_sueDao.law_suitSelect(selectMap);
	}
	
	@Override
	public List<Ales_sueVO> pla_defSelect(Map<String, Object> selectMap) {
		return ales_sueDao.pla_defSelect(selectMap);
	}
	
	@Override
	public List<Ales_sueVO> ales_sueSelect(Map<String, Object> selectMap) {
		return ales_sueDao.ales_sueSelect(selectMap);
	}
	
	//저장/수정
	@Override
	public String ales_sueSave(List<Ales_sueVO> Ales_sueVO) {
	
		String confirm = "";
		
		int size = Ales_sueVO.size();
		
		for(int i = 0; i < size; i++){
			Ales_sueVO ales_sueVO = Ales_sueVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ales_sueVO;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				ales_sueDao.ales_sueSave(ales_sueVO);
				confirm = "SAVED";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				ales_sueDao.ales_sueUpdate(ales_sueVO);
				confirm = "UPDATED";
			}
		}
		return confirm;
	}

	@Override
	public void updateAlesSue(Object alesSueVO) {

		Ales_sueVO vo = new Ales_sueVO();		
		Map<String, Object> map = (HashMap<String, Object>) alesSueVO;	
		
		System.out.println("serviceImpl:::voObject===>"+map);
		
		List normalList = (List) map.get("normal");
		
		for (int i = 0; i < normalList.size(); i++){			
			vo = (Ales_sueVO)normalList.get(i);			
			System.out.println("serviceImpl:::normalAlesSue =================>" + vo.toString());			
			ales_sueDao.updateAlesSue(vo);
		}

		
	}
	
	

}
