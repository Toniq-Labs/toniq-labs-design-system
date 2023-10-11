import {directive, Directive, ElementPartInfo, noChange, PartInfo, PartType} from 'element-vir';

export const testIdAttribute = 'data-test-id';

export const testId = directive(
    class extends Directive {
        public readonly element: Element;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'testId', HTMLElement);
        }

        render(testId: string) {
            this.element.setAttribute(testIdAttribute, testId);
            return noChange;
        }
    },
);

/** For some reason these aren't defined in lit's types already. */
type ExtraPartInfoProperties = {
    element: Element;
    options: {
        host: Element;
        renderBefore: Element;
        isConnected: boolean;
    };
};

function extractElement<ElementType = HTMLElement>(
    partInfo: PartInfo,
    directiveName: string,
    constructorClass: (new () => ElementType) | (abstract new () => ElementType),
): ElementType {
    assertsIsElementPartInfo(partInfo, directiveName);
    const element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
    if (!(element instanceof constructorClass)) {
        throw new Error(`${directiveName} attached to non ${constructorClass.name} element.`);
    }
    return element as ElementType;
}

function assertsIsElementPartInfo(
    partInfo: PartInfo,
    directiveName: string,
): asserts partInfo is ElementPartInfo & ExtraPartInfoProperties {
    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(`${directiveName} directive can only be attached directly to an element.`);
    }
    if (!(partInfo as ElementPartInfo & ExtraPartInfoProperties).element) {
        throw new Error(`${directiveName} directive found no element.`);
    }
}
