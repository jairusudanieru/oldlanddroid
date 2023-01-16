
module.exports = {
    name: "guildMemberUpdate",
    async execute(oldMember, newMember) {
        const user = newMember.guild.members.cache.get(newMember.user.id);
        const oldName = oldMember.user.username;
        const newName = newMember.user.username;
        const oldNickname = oldMember.displayName;
        const newNickname = newMember.displayName;

        if (oldNickname !== "JairusuDanieru." && newNickname == "JairusuDanieru.") {
            await user.setNickname("Moderated Name");
        } else if (oldName !== "JairusuDanieru." && newName == "JairusuDanieru.") {
            await user.setNickname("Moderated Name");
        } else if (oldNickname == "Moderated Name" && newName !== "JairusuDanieru.") {
            await user.setNickname(newName);
        }
    },
};
