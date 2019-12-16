import * as React from "react";
import { Row, Col } from "antd";
import { ReactNode } from "react";

export enum ResponsiveComponentType {
    "FormStyle",
    "SingleColumn",
    "DoubleColumn"
}

interface IResponsiveProps {
    type: ResponsiveComponentType;
}

export class Responsive extends React.Component<IResponsiveProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        let defaultRowGutter: number = 3;
        let defaultRowAlign: any = "middle";
        let colStatus: any = {};
        switch (this.props.type) {
            case ResponsiveComponentType.FormStyle:
                colStatus = {
                    rowAlign: defaultRowAlign,
                    rowGutter: defaultRowGutter,
                    colXs: 24,
                    colSm: 24,
                    colMd: 12,
                    colLg: 8,
                    colXl: 8,
                    colXxl: 6
                };
                break;
            case ResponsiveComponentType.SingleColumn:
                colStatus = {
                    rowAlign: defaultRowAlign,
                    rowGutter: defaultRowGutter,
                    colXs: 24,
                    colSm: 24,
                    colMd: 24,
                    colLg: 24,
                    colXl: 24,
                    colXxl: 24
                };
                break;
            case ResponsiveComponentType.DoubleColumn:
                colStatus = {
                    rowAlign: defaultRowAlign,
                    rowGutter: defaultRowGutter,
                    rowJustify: "start",
                    colXs: 24,
                    colSm: 24,
                    colMd: 12,
                    colLg: 12,
                    colXl: 12,
                    colXxl: 12
                };
                break;
        }

        let responsiveContainer: ReactNode[] = [];
        let typeName: any = "";
        React.Children.map(this.props.children, (child: any, i: any) => {
            typeName = "";
            if (child && child.type && child.type.name) {
                typeName = child.type.name;
            }
            responsiveContainer.push(
                <Col key={i}
                    xs={colStatus.colXs}
                    sm={colStatus.colSm}
                    md={colStatus.colMd}
                    lg={colStatus.colLg}
                    xl={colStatus.colXl}
                    xxl={colStatus.colXxl}>
                    {child}
                </Col>);
        });

        return (<Row gutter={colStatus.rowGutter} align={colStatus.rowAlign}>{responsiveContainer}</Row>);
    }
}

