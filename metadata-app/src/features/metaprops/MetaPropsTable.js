import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table'
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import PopoverPopupState from './InfoPopover'

const styles = theme => ({
    cellTypography: {
        fontSize: "0.8125rem",
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class MetaPropsTable extends React.Component {

    state = { anchorEl: null }

    handleInfoClick = (event, rowData) => {
        this.state.anchorEl == null ? this.setState({ anchorEl: event.currentTarget }) : this.setState({ anchorEl: null })
    };

    handleClose = () => {
        this.setState({ anchorEl: null })
    };

    getPlatformReq = (platforms, platformReqd) => {
        for (let i in platforms) {
            const platform = platforms[i]
            if (platform.name === platformReqd) {
                return {
                    req: platform.req,
                    info: platform.info
                }
            }
        }
        return null
    }

    chooseProps = (metaProps, platforms) => {
        let rows = metaProps.map((prop) => {
            let row = {
                name: prop.name,
                description: prop.description
            }
            for (let i in platforms) {
                const platform = platforms[i]
                let platformReq = this.getPlatformReq(prop.platforms, platform)
                row[platform] = platformReq
            }
            return row;
        })

        return rows
    }

    filterEmptyProps = (metaProps) => {
        let filtered = metaProps.filter((metaProp) => {
            for (let key in metaProp) {
                if (["index", "name", "description"].indexOf(key) !== -1){
                    continue
                }
                if (metaProp[key].req !== "") {
                    return true
                }
            }

            return false
        })

        return filtered
    }

    prepareFilterProps = (metaProps) => {
        let filterProps = {}
        metaProps.forEach((metaProp) => {
            for (let key in metaProp) {
                if (["index", "name", "description"].indexOf(key) !== -1){
                    continue
                }
                if (metaProp[key].req === "") {
                    continue
                }
                if (!(key in filterProps)) {
                    filterProps[key] = {}
                }
                const req = metaProp[key].req
                if (!(req in filterProps[key])) {
                    filterProps[key][req] = req
                }
            }
        })
        return filterProps
    }

    updatePropIndex = (metaProps) => {
        let index = 1
        let rows = metaProps.map( (prop) => {
            prop.index = index++
            return prop
        })

        return rows
    }

    makeColumns = (platforms, filterProps, classes) => {
        let columns = [
            {
                title: 'Sl. No',
                field: 'index',
                align: 'center',
                filtering: false,
            },            
            {
                title: 'Description',
                field: 'description',
                filtering: false,
                render: rowdata =>
                (<div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography>
                        {rowdata.name}
                    </Typography>
                    <Typography className={classes.cellTypography}>
                        {rowdata.description}
                    </Typography>
                </div>
                )
            }
        ]

        for (let i in platforms) {
            columns.push({
                'title': platforms[i],
                'field': platforms[i],
                'lookup': filterProps[platforms[i]],
                'customFilterAndSearch': (term, rowData) => {
                    if (term.length === 0) {
                        return true
                    }
                    return (term.indexOf(rowData[platforms[i]].req) !== -1)
                },
                'render': rowData => (rowData[platforms[i]].info) ?
                    (
                        <div style={{ alignItems: "flex-end", display: "flex" }}>
                            <div style={{ flex: 1 }}>
                                {rowData[platforms[i]].req}
                            </div>
                            <div style={{ flex: 1 }}>
                                <PopoverPopupState info={rowData[platforms[i]].info} />
                            </div>
                        </div>
                    ) :
                    (<div className={classes.actionWrapper}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {rowData[platforms[i]].req}
                        </div>
                    </div>),
            })
        }

        return columns
    }

    render() {
        const { data } = this.props;

        const allProps = this.chooseProps(data.metaProps, data.names)
        const metaProps = data.hideEmptyProps ? 
                            this.updatePropIndex (this.filterEmptyProps(allProps)) :
                            this.updatePropIndex (allProps)
       
        const filterLookup = this.prepareFilterProps(metaProps)
        const columns = this.makeColumns(data.names, filterLookup, this.props.classes)

        return (
            <MaterialTable
                title="Metadata"
                columns={columns}
                data={metaProps}
                options={{
                    pageSize: 30,
                    pageSizeOptions:[30],
                    filtering: true,
                    fixedColumns: {
                        left: 2, 
                        right: 0
                      }                
                }}
            />)
    }
}


MetaPropsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MetaPropsTable);
