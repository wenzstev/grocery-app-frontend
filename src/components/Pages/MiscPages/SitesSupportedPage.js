import React from "react"

import {
    Typography,
    List,
    ListItem
} from "@material-ui/core"

import BasicInfoPage from "./BasicInfoPage"

const sitesSupported = [
    "www.allrecipes.com",
    "foodnetwork.com",
    "food.com",
    "yummly.com",
    "epicurious.com",
    "seriouseats.com",
    "smittenkitchen.com",
    "simplyrecipes.com",
    "orangette.net",
    "minimalistbaker.com",
    "budgetbytes.com",
    "food52.com",
    "cookieandkate.com",
    "acouplecooks.com"
]

const SitesSupportedPage = () => {
    return (
        <BasicInfoPage>
            <Typography variant="h5">Sites Supported</Typography>
            <br />
            <List>
                {sitesSupported.map((item, index)=>(
                    <ListItem key={index}>
                        <a href={"https://" + item}>{item}</a>
                    </ListItem>
                ))}
            </List>
        </BasicInfoPage>
    )
}

export default SitesSupportedPage