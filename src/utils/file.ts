export const readFileContent = async (file: File): Promise<string> => {
  return file.text();
};

export const getFileExtension = (file: File) => {
  return file?.name.split('.').slice(-1)[0];
};

export const convertFileContentToObject = (fileContent: string, extension: string): object => {
  if (extension === 'csv') {
    return convertFileWithSeparatedValuesToArray(fileContent, ',');
  }
  if (extension === 'tsv') {
    return convertFileWithSeparatedValuesToArray(fileContent, '\t');
  }
  if (extension === 'json' || extension === 'txt') {
    try {
      return JSON.parse(fileContent);
    } catch (e) {
      return {};
    }
  }
  return {};
};

export const convertFileWithSeparatedValuesToArray = (fileContent: string, separator: string) => {
  const lines: Array<string> = fileContent.split('\n');
  const headers: Array<string> = lines[0].split(separator);
  return lines.slice(1).map((line) => {
    const currentLine = line.split(separator);
    const obj: { [key: string]: string } = {};
    headers.forEach((header, index) => {
      obj[header] = currentLine[index];
    });
    return obj;
  });
};
