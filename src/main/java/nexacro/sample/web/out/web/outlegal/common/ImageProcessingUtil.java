package nexacro.sample.web.out.web.outlegal.common;

import java.awt.Image;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;

/**
 * 
 * @author lce
 * 이미지 파일 편집 클래스
 */
public class ImageProcessingUtil {
	
	private static String[] imgs = {"img","jpg","gif","png","bmp"};
	
	public static boolean isImage(String extention){
		for(String img : imgs){
			if(img.equals(extention)){
				return true;
			}
		}
		return false;
	}
	
	public static int[] sizeXY(InputStream inputStream) throws IOException{
		Image image = ImageIO.read(inputStream);
		
		int[] result = new int[2];
		result[0]=image.getWidth(null);
		result[1]=image.getHeight(null);
		
		return result;
	}
	
	public static int[] sizeXY(File inputStream) throws IOException{
		Image image = ImageIO.read(inputStream);
		
		int[] result = new int[2];
		result[0]=image.getWidth(null);
		result[1]=image.getHeight(null);
		
		return result;
	}
}
