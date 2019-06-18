package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'ReactUI_Publish'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("ReactUI_Publish")) {
    params {
        add {
            param("teamcity.vcsTrigger.runBuildInNewEmptyBranch", "true")
        }
    }
}