export default interface IFile {
    name: string;
    type: 'file' | 'folder';
    children?: IFile[];
}
