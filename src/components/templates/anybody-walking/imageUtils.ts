const extractImageExtensionFromFile = (aFile: File) => {
    if (aFile) {
      const fileTypeStr = aFile.type;

      if (fileTypeStr)
        console.log('teststring to extract extension', fileTypeStr);

      if (fileTypeStr?.length > 0) {
        return fileTypeStr.includes('png') ? 'png' : 'jpg';
      }
    }

    return '';
  }

const extractImageExtensionFromFileUrl = (aFile: File) => {
    if (aFile) {
      const fileTypeStr = aFile.type;

      if (fileTypeStr)
        console.log('teststring to extract extension', fileTypeStr);

      if (fileTypeStr?.length > 0) {
        return fileTypeStr.includes('png') ? 'png' : 'jpg';
      }
    }

    return '';
  }

  export default {extractImageExtensionFromFile,extractImageExtensionFromFileUrl}
