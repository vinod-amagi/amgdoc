import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    link: {
        // fontSize: "inherit",
        color: theme.palette.primary.main,
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontWeight: "500",
        fontSize: "0.8125rem",
    },
    cellTypography: {
        fontSize: "0.8125rem",
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class MetaPropsTable extends React.Component {

    getPlatformReq = (platforms, platformReqd) => {
        for (let i in platforms){
            const platform = platforms[i]
            if (platform.name === platformReqd){
                return platform.req
            }
        }
        return null
    }

    chooseProps = (metaProps, platforms) => {
        let index = 1
        let rows = metaProps.map((prop) => {
            let row = {
                index: index++,
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

    makeColumns = (platforms) => {
        let columns = [
            {
                title: 'Sl. No',
                field: 'index',
                align: 'center',
            },
            {
                title: 'Name',
                field: 'name',
            },
            {
                title: 'Description',
                field: 'description',
            },
        ]
        for (let i in platforms) {
            columns.push({
                'title' : platforms[i],
                'field' : platforms[i]
            })
        }

        return columns
    }

    render() {
        const { data } = this.props;

        const metaProps = this.chooseProps(data.metaProps, data.names)
        
        const columns = this.makeColumns(data.names)

        console.log("Columns " + JSON.stringify(columns) + "Platforms \n" + JSON.stringify(data.names))

        return (
            <MaterialTable
                title="Metadata"
                columns={columns}
                data={metaProps}
                options={{
                    pageSize: 30,
                    pageSizeOptions: [10, 30, 50],
                }}
            />)
    }
}


MetaPropsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MetaPropsTable);
