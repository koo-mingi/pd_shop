package nexacro.shop.service.dao.mybatis;

import java.util.List;
import java.util.Map;

import nexacro.shop.vo.product.ProductVO;

public interface ProductMapper {
	public List<ProductVO> getProductList(Map<String, String> productMap);
}
