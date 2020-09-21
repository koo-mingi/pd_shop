package nexacro.sample.service.impl.prgr;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.prgr.Edoc_admDAO;
import nexacro.sample.service.prgr.Edoc_admService;
import nexacro.sample.vo.prgr.Edoc_admVO;

import org.hsqldb.lib.HashMap;
import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

@Service("edoc_admService")
public class Edoc_admServiceImpl implements Edoc_admService {
	
	@Resource(name = "edoc_admDao")
	private Edoc_admDAO edoc_admDao;
	
	//기본조회
	@Override
	public List<Edoc_admVO> edoc_lawsuitSelect(Map<String, Object> selectMap) {
		return edoc_admDao.edoc_lawsuitSelect(selectMap);
	}
	
	@Override
	public List<Edoc_admVO> edoc_pladefSelect(Map<String, Object> selectMap) {
		return edoc_admDao.edoc_pladefSelect(selectMap);
	}
	
	@Override
	public List<Edoc_admVO> edoc_admSelect1(Map<String, Object> selectMap) {
		return edoc_admDao.edoc_admSelect1(selectMap);
	}
	
	@Override
	public List<Edoc_admVO> edoc_admSelect2(Map<String, Object> selectMap) {
		return edoc_admDao.edoc_admSelect2(selectMap);
	}
	
	//저장/수정
	@Override
	public String edoc_admSave(List<Edoc_admVO> Edoc_admVO) {
	
		String confirm = "";
		
		int size = Edoc_admVO.size();
		
		for(int i = 0; i < size; i++){
			Edoc_admVO edoc_admVO = Edoc_admVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) edoc_admVO;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				edoc_admDao.edoc_admSave(edoc_admVO);
				confirm = "SAVED";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				edoc_admDao.edoc_admUpdate(edoc_admVO);
				confirm = "UPDATED";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				edoc_admDao.edoc_admDelete(edoc_admVO);
				confirm = "DELETED";
				
			}
		}
		return confirm;
	}

	@Override
	public List<Edoc_admVO> getEdocAdmList(String lawsuitAdmNo) {
		return edoc_admDao.getEdocAdmList(lawsuitAdmNo);
	}

	@Override
	public String edoc_admDelete(Map<String, Object> deleteMap) {
		edoc_admDao.edoc_admDelete2(deleteMap);
		return null;
	}
	
	
	
	

}
