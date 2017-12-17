import CircularJson from 'circular-json'
import { parser } from './jsonParser'

function updateVm(vm) {
    var window = vm.__window__
    if (window) {
        delete vm.__window__
        return { ViewModel: vm, Window: window }
    }
    return vm;
}

CircularJson.parser = {
    stringify: JSON.stringify,
    parse: parser
};

function createVM(rawVm) {
    return updateVm(CircularJson.parse(rawVm));
}

export { createVM }