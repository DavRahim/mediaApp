import {
    Account,
    Client,
    ID,
} from "react-native-appwrite";


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.rs.aora',
    projectId: "66269e26ccc7dd115bd0",
    databaseId: "6626a022eda090dab524",
    userCollectionId: "6626a082cef0aec278be",
    videoCollectionId: "6626a0c01431a03add71",
    storageId: "6626a35c1130cf39ffed"
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);


const account = new Account(client);

// Register user
export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        // const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        // const newUser = await databases.createDocument(
        //     appwriteConfig.databaseId,
        //     appwriteConfig.userCollectionId,
        //     ID.unique(),
        //     {
        //         accountId: newAccount.$id,
        //         email: email,
        //         username: username,
        //         avatar: avatarUrl,
        //     }
        // );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}






